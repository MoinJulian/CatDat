import { Crawler } from 'es6-crawler-detect'
import type { RequestEvent } from '@sveltejs/kit'

const crawler_detector = new Crawler()

function is_bot(request: Request): boolean {
	const user_agent = request.headers.get('user-agent') ?? ''
	return crawler_detector.isCrawler(user_agent)
}

function is_same_origin(request: Request, site_origin: string): boolean {
	const origin = request.headers.get('origin')
	const referer = request.headers.get('referer')

	if (origin !== null) return origin === site_origin
	if (referer !== null) return referer.startsWith(site_origin)

	return false
}

export function is_allowed(event: RequestEvent): boolean {
	return is_same_origin(event.request, event.url.origin) && !is_bot(event.request)
}

export function get_geo_data(request: Request): {
	country: string | null
} {
	// Netlify specific geo header
	const geo_header = request.headers.get('x-nf-geo')

	if (!geo_header) return { country: null }

	try {
		const txt = decode_base64_utf8(geo_header)
		const decoded = JSON.parse(txt)
		const country = decoded.country?.name || null
		return { country }
	} catch (_) {
		console.error('Netlify geo header cannot be parsed:', geo_header)
		return { country: null }
	}
}

function decode_base64_utf8(input: string): string {
	const bytes = Uint8Array.from(atob(input), (c) => c.charCodeAt(0))
	return new TextDecoder('utf-8').decode(bytes)
}
