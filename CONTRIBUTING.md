# 🤝 How to Contribute

There are three ways to contribute:

- [🐛 Create an Issue](#option-1-create-an-issue)
- [🛠️ Create a Pull Request](#option-2-create-a-pull-request)
- [📩 Submit Our Google Form](#option-3-submit-our-google-form)

## Option 1: Create an Issue 🐛

If you want to report an issue with _CatDat_ or add data but don't feel comfortable creating a pull request, you can [**create an issue**](https://github.com/ScriptRaccoon/CatDat/issues). You will need a GitHub account for this.

1. **Adding a Category**: Include its definition (objects, morphisms) and specify as many properties and non-properties of this category as possible. You can use the [list of available properties](https://catdat.netlify.app/properties) for reference.

2. **Adding a Property**: Include its definition and, if possible, indicate which existing categories have this property and which do not. Also, list the implications involving this property (e.g., when adding the property `abelian`, include `abelian => additive`, etc.).

3. **Adding an Implication**: Ensure that the implication cannot be deduced from existing implications. If the implication involves properties not yet in the database, add these properties as well (see item 2).

For any non-trivial results, please provide a proof or a reference.

## Option 2: Create a Pull Request 🛠️

Create a [**pull request**](https://github.com/ScriptRaccoon/CatDat/pulls). You will need a GitHub account for this.

### Adding a New Category

- Edit the file [categories.ts](src/lib/categories/categories.ts).
- Refer to this [example commit](https://github.com/ScriptRaccoon/CatDat/commit/236eeb033b0f78bafc5a58c1e84989b2c7767399) for guidance.

### Adding a New Property

- Edit the file [properties.ts](src/lib/properties/properties.ts).
- Refer to this [example commit](https://github.com/ScriptRaccoon/CatDat/commit/43ba7f544fd3b1c8d76e9700fccaccc5ed21b0b3) for guidance.

### Adding a New Implication

- Edit the file [implications.ts](src/lib/implications/implications.ts).
- Refer to this [example commit](https://github.com/ScriptRaccoon/CatDat/commit/44f023dd0b6946a11256bf6b0aeb6d7c20c0da90) for guidance.

For more information on why we don't use a traditional database, see [this documentation](/docs/database.md).

### Guidelines for Adding New Data

When contributing new data (categories, properties, implications), please follow these guidelines:

- **Consistency**: Stick to the format indicated by the existing data. This is enforced by the types and tests.

- **Atomic Implications**: Only add "atomic" implications. Do not add implications that can be deduced from others. For example, do not add "complete => finite products" if it can be deduced from "complete => finitely complete" and "finitely complete => finite products". These are deduced automatically. Implications are also dualized automatically when applicable.

- **New Properties**: When adding a new property, include all implications involving this property and existing properties. For example, when adding "countable products", also add "countable products => finite products". Refactor existing implications if necessary. Ensure that for most categories, it will be inferred if the property holds or not.

- **Non-Deducible Properties**: Only add properties and non-properties to a category that cannot be deduced from other properties. This is enforced with a unit test. For example, if a category is complete, add the property 'complete', but do not add 'terminal object'. The deduction system handles this automatically.

- **Proofs for New Properties**: For every new property, try to find a proof for whether each existing category has this property or not, unless it can be deduced from existing properties.

- **Counterexamples**: Ensure that at least one category does not satisfy any new property added. This is enforced with a unit test. If no existing category fits, add a new category that does not have the new property.

- **Reduce Unknowns**: Aim to reduce the number of unknown properties of categories in the database. Use the page with missing data to identify these.

- **Simplify Implications**: When adding a new implication, check if it simplifies existing implications and if it makes some properties and non-properties in the list of categories redundant.

- **New Categories**: Add new categories that satisfy combinations of properties and non-properties not yet in the database. For example, you may add a category that is abelian but neither cocomplete nor essentially small if it is not already present.

- **Positive Properties**: Do not add negated properties to the database. For example, do not add "large" as the negation of "small". Instead, add "small" to the list of non-properties for a category. As a rule of thumb, every registered property should be satisfied by the trivial category.

- **Proofs for Claims**: Provide proofs for non-obvious new claims, especially regarding the properties of very special categories, in your pull request.

## Option 3: Submit our Google Form 📩

The Google Form is the least technical way to submit new categories, properties, and implications. Issues and feature request may be submitted as well. This option does not require any knowledge of GitHub or coding, making it accessible to everyone.

[**Link to the Google Form**](https://forms.gle/8LBmro5FfSa43pD2A)

We will then have a look at your submission and try to implement it.
