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
