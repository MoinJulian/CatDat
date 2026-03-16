-- migration for testing new preview workflow
UPDATE categories
SET description = 'This is very similar to the category of topological spaces. Accordingly, limits and colimits can be constructed in the same way.'
WHERE id = 'Meas';

UPDATE category_comments
SET comment = 'It is likely that the epimorphisms are exactly the continuous maps with dense image, just as for Hausdorff spaces (see <a href="https://math.stackexchange.com/questions/214045" target="_blank">MSE/214045</a>), but the proof needs to be tweaked.' WHERE category_id = 'Met_c';

INSERT INTO related_categories
    (category_id, related_category_id)
VALUES
    ('Meas', 'Top');