-- cf. https://answers.netlify.com/t/my-url-paths-are-forced-into-lowercase/1659
-- and 010_unique-lower-id.sql

CREATE UNIQUE INDEX implications_lower_id_unique ON implications (lower(id));