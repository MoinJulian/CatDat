# The database of _CatDat_

## Overview

_CatDat_ is based on a [SQLite database](https://sqlite.org/). During runtime of the application, it is read-only.

During development, the database is located in the file `/database/local.db`. It has three main tables:

- `categories`
- `properties`
- `implications`

To associate (non-)properties with categories, there are two tables:

- `category_properties`
- `category_non_properties`

To mark properties as assumptions or conclusions of an implication, there are two tables:

- `implication_assumptions`
- `implication_conclusions`

But they are abstracted away by using the view `implications_view`.

Further tables are:

- `tags`
- `category_tags`
- `related_categories`
- `prefixes`
- `category_isomorphisms`
- `category_epimorphisms`
- `category_monomorphisms`
- `related_properties`
- `category_comments`

## Derived Data

From the defined properties for a given category, new properties can be derived automatically by using the implications (the same holds for non-properties). Also, suitable implications may be dualized. Notice that the migration files (see below) do _not_ contain derived data.

## Migrations

The database is built up incrementally and updated with the help of migration files in the folder [/database/migrations](/database/migrations/). The command `pnpm db:update` runs the migrations that are not yet applied, deduces implications and properties, and checks if the changes are sound.

## Preview Database Changes Locally

We are working on a user-friendly way to preview local database changes and automate migration file creation. For now, you can use the following method, which requires the [`sqldiff`](https://sqlite.org/sqldiff.html) utility:

1. Before making changes, create a backup of the local database with `cd database && cp local.db original.db`.
2. Modify `local.db` either directly in the `sqlite3` shell or using a GUI like [DBeaver](https://dbeaver.io/).
3. Preview the changes in the application using the local development server (`pnpm dev`), which reads from `local.db`.
4. When ready, run `pnpm db:diff` to execute `sqldiff` and compare `local.db` with `original.db`.
5. Copy the output into a new migration `.sql` file.
6. Refine the migration code by formatting it, removing redundant columns (such as `created_at`), and replacing numeric `rowid` values with meaningful IDs.
7. Delete `local.db`, rename `original.db` to `local.db` to restore the original state, and apply the migration with `pnpm db:update`.

## Diagram

![database diagram](/static/database-diagram.png)
