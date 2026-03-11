import { error } from '@sveltejs/kit'
import { render_nested_formulas } from '$lib/commons/rendering'
import { batch } from '$lib/server/db'
import sql from 'sql-template-tag'
import type {
	CategoryDisplay,
	DescriptionWithReason,
	RelatedCategory,
} from '$lib/commons/types'

export const load = async (event) => {
	const id = event.params.id

	// TODO: load properties (direct + deduced) of given category

	const { results, err } = await batch<
		[
			CategoryDisplay,
			RelatedCategory,
			{ tag: string },
			DescriptionWithReason,
			DescriptionWithReason,
			DescriptionWithReason,
		]
	>([
		sql`
			SELECT
				id, name, notation, objects, morphisms,
				description, nlab_link
			FROM categories
			WHERE id = ${id}
		`,
		sql`
			SELECT
				r.related_category_id AS id,
				c.name,
				c.notation
			FROM related_categories r
			INNER JOIN categories c ON c.id = r.related_category_id
			WHERE r.category_id = ${id}
		`,
		sql`
			SELECT tag
			FROM category_tags
			WHERE category_id = ${id}
		`,
		sql`
			SELECT description, reason
			FROM category_isomorphisms
			WHERE category_id = ${id}
		`,
		sql`
			SELECT description, reason
			FROM category_epimorphisms
			WHERE category_id = ${id}
		`,
		sql`
			SELECT description, reason
			FROM category_monomorphisms
			WHERE category_id = ${id}
		`,
	])

	if (err) error(500, 'Could not load category')

	const [categories, related_categories, tag_objects, iso_rows, epi_rows, mono_rows] =
		results

	if (!categories.length) error(404, `Could not find category with ID '${id}'`)

	const category = categories[0]
	const tags = tag_objects.map(({ tag }) => tag)
	const isomorphisms = iso_rows.at(0)
	const epimorphisms = epi_rows.at(0)
	const monomorphisms = mono_rows.at(0)

	return render_nested_formulas({
		category,
		related_categories,
		tags,
		isomorphisms,
		epimorphisms,
		monomorphisms,
	})
}
