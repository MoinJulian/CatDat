import { default as createDOMPurify, default as DOMPurify } from 'dompurify'

export function sanitizeHTML(
	node: { innerHTML: string },
	[unsafeHTML]: [string],
): {
	update: ([unsafeHTML]: [string]) => void
} {
	if (globalThis.window !== undefined) {
		const DOMPurify = createDOMPurify(globalThis.window)

		node.innerHTML = DOMPurify.sanitize(unsafeHTML)
	}

	return {
		update([unsafeHTML]: [string]) {
			if (globalThis.window !== undefined) {
				node.innerHTML = DOMPurify.sanitize(unsafeHTML)
			}
		},
	}
}
