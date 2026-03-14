DROP TRIGGER IF EXISTS trg_implication_input_insert;
DROP TRIGGER IF EXISTS trg_prevent_contradictory_property;
DROP TRIGGER IF EXISTS trg_prevent_contradictory_non_property;

-- uses the 'implication_input' view to insert implications
-- together with assumptions and conclusions
CREATE TRIGGER trg_implication_input_insert
INSTEAD OF INSERT ON implication_input
BEGIN
    INSERT INTO implications (id, is_equivalence, reason, is_deduced)
    VALUES (
        NEW.id,
        COALESCE(NEW.is_equivalence, FALSE),
        NEW.reason,
        COALESCE(NEW.is_deduced, FALSE)
    );

    INSERT INTO implication_assumptions (implication_id, property_id)
    SELECT NEW.id, value
    FROM json_each(NEW.assumptions);

    INSERT INTO implication_conclusions (implication_id, property_id)
    SELECT NEW.id, value
    FROM json_each(NEW.conclusions);
END;


-- checks that no new property for a category is already a non-property
CREATE TRIGGER trg_prevent_contradictory_property
BEFORE INSERT ON category_properties
FOR EACH ROW
WHEN EXISTS (
    SELECT 1 FROM category_non_properties
    WHERE
        category_id = NEW.category_id
        AND non_property_id = NEW.property_id
)
BEGIN
    SELECT RAISE(ABORT, 'Cannot insert property since it is already marked as a non-property.');
END;

-- checks that no new non-property for a category is already a property
CREATE TRIGGER trg_prevent_contradictory_non_property
BEFORE INSERT ON category_non_properties
FOR EACH ROW
WHEN EXISTS (
    SELECT 1 FROM category_properties
    WHERE
        category_id = NEW.category_id
        AND property_id = NEW.non_property_id
)
BEGIN
    SELECT RAISE(ABORT, 'Cannot insert non-property since it is already marked as a property.');
END;