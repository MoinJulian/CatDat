#!/bin/bash
set -e

DB="database/local.db"

for file in database/schema/[0-9][0-9]_*.sql; do
    echo "Applying schema: $file..."
    sqlite3 "$DB" < "$file"
done

for file in database/source_data/*.sql; do
    echo "Inserting source data from: $file..."
    sqlite3 "$DB" < "$file"
done