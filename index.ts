/** Tests if the specified value is null or undefined.
 *
 * Useful as the predicate of filter functions and similar. */
export function isNull<T>(value: unknown): value is null | undefined {
    return value == null;
}

/** Tests if the specified value is null or undefined.
 *
 * Useful as the predicate of filter functions and similar. */
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function isNotNull<T>(value: T | null | undefined | void): value is T {
    return value != null;
}

/** Asserts that the specified value is neither null nor undefined, and
 * returns it.
 *
 * @throws TypeError if the value is null or undefined */
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function notNull<T>(value: T | null | undefined | void): T {
    if (value == null) {
        throw new TypeError(`value is ${String(value)}`);
    }

    return value;
}

/** Returns the specified value, or the default value if the specified value
 * is null or undefined.
 *
 * If the default value is expensive to compute, consider using
 * {@link mapNull} instead. */
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function defaultValue<T>(nullable: T | undefined | null | void, defaultValue: T): T {
    return nullable ?? defaultValue;
}

/** Returns a function that returns the specified value, or the default value
 * if the specified value is null or undefined.
 *
 * If the default value is expensive to compute, consider using
 * {@link mapNullFn} instead. */
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function defaultValueFn<T>(defaultValue: T): (nullable: T | undefined | null | void) => T {
    return nullable => nullable ?? defaultValue;
}

/** If the specified value is null or undefined, returns null.
 *
 * Otherwise, passes the specified value to the provided function and returns
 * the return value of that function. */
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function map<T, U>(nullable: T | undefined | null | void, f: (element: T) => U): U | null {
    return nullable == null ? null : f(nullable) ?? null;
}

/** Returns a function that takes a nullable value as its argument.
 *
 * If the function is called with null or undefined, it returns null.
 *
 * Otherwise, the argument is passed to the callback `f` and the
 * return value of `f` is returned.
 *
 * Curried variant of {@link map}. */
export function mapFn<T, U>(
    f: (element: T) => U
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
): (nullable: T | undefined | null | void) => U | null {
    return nullable => map(nullable, f);
}

/** If the specified value is null or undefined, returns null.
 *
 * Otherwise, passes the specified value to the provided function and returns
 * the return value of that function.
 *
 * Alias for {@link map}. */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore This is the exported declaration, the actual implementation is below.
export function mapNullable<T, U>(
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    nullable: T | undefined | null | void,
    f: (element: T) => U
): U | null;

/** @internal */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore This is the implementation, the exported declaration is above.
export const mapNullable = map;

/** Returns a function that takes a nullable value as its argument.
 *
 * If the function is called with null or undefined, it returns null.
 *
 * Otherwise, the argument is passed to the callback `f` and the
 * return value of `f` is returned.
 *
 * Alias for {@link mapFn}, which is a curried variant of {@link map}. */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore This is the exported declaration, the actual implementation is below.
export function mapNullableFn<T, U>(
    f: (element: T) => U
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
): (nullable: T | undefined | null | void) => U | null;

/** @internal */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore This is the implementation, the exported declaration is above.
export const mapNullableFn = mapFn;

/** Returns the specified value or, if the value is null or undefined, calls
 * the provided callback and returns the result of that function call.
 *
 * Useful as an alternative to {@link defaultValue} if the default value is
 * expensive to compute. */
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function mapNull<T, U = T>(nullable: T | undefined | null | void, f: () => U): T | U {
    return nullable == null ? f() : nullable;
}

/** Returns a function that returns the specified value or, if the value is
 * null or undefined, calls the provided callback and returns the result of
 * that function call.
 *
 * Useful as an alternative to {@link defaultValueFn} if the default value is
 * expensive to compute. */
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function mapNullFn<T, U = T>(f: () => U): (nullable: T | undefined | null | void) => T | U {
    return nullable => mapNull(nullable, f);
}
