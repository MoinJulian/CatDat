PRAGMA foreign_keys = OFF;

DELETE FROM implication_assumptions;
DELETE FROM implication_conclusions;
DELETE FROM implications;

DELETE FROM category_isomorphisms;
DELETE FROM category_epimorphisms;
DELETE FROM category_monomorphisms;

DELETE FROM category_non_properties;
DELETE FROM category_properties;

DELETE FROM category_comments;
DELETE FROM related_categories;
DELETE FROM category_tags;
DELETE FROM categories;

DELETE FROM tags;

DELETE FROM related_properties;
DELETE FROM properties;
DELETE FROM prefixes;

PRAGMA foreign_keys = ON;