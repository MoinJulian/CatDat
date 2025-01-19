export function group_items<S extends string, T extends { id: S }>(
	array: T[],
): Record<S, T> {
	// @ts-expect-error will build up the object
	const acc: Record<S, T> = {}
	for (const item of array) {
		acc[item.id] = item
	}
	return acc
}
