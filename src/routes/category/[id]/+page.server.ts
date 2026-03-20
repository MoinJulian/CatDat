import { error } from '@sveltejs/kit'
import { render_nested_formulas } from '$lib/server/rendering'
import { batch } from '$lib/server/db'
import sql from 'sql-template-tag'
import type {
	CategoryDisplay,
	CategoryProperty,
	CategoryPropertyDB,
	CommentObject,
	PropertyShort,
	RelatedCategory,
	SpecialMorphism,
	SpecialObject,
	TagObject,
} from '$lib/commons/types'

export const prerender = true

export const load = async (event) => {
	const id = event.params.id

	const { results, err } = await batch<
		[
			CategoryDisplay,
			RelatedCategory,
			TagObject,
			CategoryPropertyDB,
			CategoryPropertyDB,
			PropertyShort,
			SpecialObject,
			SpecialMorphism,
			CommentObject,
		]
	>([
		// basic information
		sql`
			SELECT
				id, name, notation, objects, morphisms,
				description, nlab_link
			FROM categories
			WHERE id = ${id}
		`,
		// related categories
		sql`
			SELECT
				r.related_category_id AS id,
				c.name,
				c.notation
			FROM related_categories r
			INNER JOIN categories c ON c.id = r.related_category_id
			WHERE r.category_id = ${id}
			ORDER BY id
		`,
		// tags
		sql`
			SELECT ct.tag
			FROM category_tags ct
			INNER JOIN tags t ON t.tag = ct.tag
			WHERE ct.category_id = ${id}
			ORDER BY t.position
		`,
		// properties
		sql`
			SELECT
				cp.property_id AS id,
				cp.reason,
				cp.is_deduced,
				p.prefix
			FROM category_properties cp
			INNER JOIN properties p ON p.id = cp.property_id
			WHERE cp.category_id = ${id}
			ORDER BY cp.position, lower(cp.property_id)
		`,
		// non-properties
		sql`
			SELECT
				cnp.non_property_id AS id,
				cnp.reason,
				cnp.is_deduced,
				pf.negation as prefix
			FROM category_non_properties cnp
			INNER JOIN properties p ON p.id = cnp.non_property_id
			INNER JOIN prefixes pf ON pf.prefix = p.prefix
			WHERE cnp.category_id = ${id}
			ORDER BY cnp.position, lower(cnp.non_property_id)
		`,
		// unknown properties
		sql`
			SELECT
				p.id,
				p.prefix
			FROM properties p
			WHERE NOT EXISTS (
				SELECT 1 FROM category_properties
				WHERE property_id = p.id AND category_id = ${id}
			)
			AND NOT EXISTS (
				SELECT 1 FROM category_non_properties
				WHERE non_property_id = p.id AND category_id = ${id}
			)
			ORDER BY lower(p.id)
		`,
		// special objects
		sql`
			SELECT s.type, s.description
			FROM special_objects s
			INNER JOIN special_object_types t ON t.type = s.type
			WHERE s.category_id = ${id}
			ORDER BY t.position
		`,
		// special morphisms
		sql`
			SELECT s.type, s.description, s.reason
			FROM special_morphisms s
			INNER JOIN special_morphism_types t ON t.type = s.type
			WHERE s.category_id = ${id}
			ORDER BY t.position
		`,
		// comments
		sql`
			SELECT id, comment FROM category_comments
			WHERE category_id = ${id}
			ORDER BY created_at
		`,
	])

	if (err) error(500, 'Could not load category')

	const [
		categories,
		related_categories,
		tag_objects,
		properties_db,
		non_properties_db,
		unknown_properties,
		special_objects,
		special_morphisms,
		comments,
	] = results

	if (!categories.length) error(404, `Could not find category with ID '${id}'`)

	const category = categories[0]
	const tags = tag_objects.map(({ tag }) => tag)

	const properties: CategoryProperty[] = properties_db.map((p) => ({
		id: p.id,
		reason: p.reason,
		prefix: p.prefix,
		is_deduced: Boolean(p.is_deduced),
	}))

	const non_properties: CategoryProperty[] = non_properties_db.map((p) => ({
		id: p.id,
		reason: p.reason,
		prefix: p.prefix,
		is_deduced: Boolean(p.is_deduced),
	}))

	return render_nested_formulas({
		category,
		related_categories,
		tags,
		properties,
		non_properties,
		unknown_properties,
		special_objects,
		special_morphisms,
		comments,
	})
}
