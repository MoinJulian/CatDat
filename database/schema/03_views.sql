DROP VIEW IF EXISTS implications_view;

CREATE VIEW implications_view AS
SELECT
    i.id,
    i.is_equivalence,
    i.reason,
    COALESCE(GROUP_CONCAT(DISTINCT a.property_id), '') AS assumptions,
    COALESCE(GROUP_CONCAT(DISTINCT c.property_id), '') AS conclusions
FROM implications i
LEFT JOIN implication_assumptions a ON i.id = a.implication_id
LEFT JOIN implication_conclusions c ON i.id = c.implication_id
GROUP BY i.id;


DROP VIEW IF EXISTS implication_input;

CREATE VIEW implication_input AS
SELECT
    NULL AS id,
    NULL AS is_equivalence,
    NULL AS assumptions,
    NULL AS conclusions,
    NULL AS reason;

