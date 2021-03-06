/** Tests if the specified value is null or undefined.
 *
 * Useful as the predicate of filter functions and similar. */
export function isNull<T>(value: unknown): value is null | undefined {
    return value == null;
}

/** Tests if the specified value is null or undefined.
 *
 * Useful as the predicate of filter functions and similar. */
export function isNotNull<T>(value: T | null | undefined): value is T {
    return value != null;
}

/** Returns the specified value, or the default value if the specified value
 * is null or undefined. */
export function defaultValue<T>(nullable: T | undefined | null, defaultValue: T): T {
    return nullable ?? defaultValue;
}

/** Returns a function that returns the specified value, or the default value
 * if the specified value is null or undefined. */
export function defaultValueFn<T>(defaultValue: T): (nullable: T | undefined | null) => T {
    return nullable => nullable ?? defaultValue;
}
