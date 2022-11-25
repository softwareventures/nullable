import test from "ava";
import {expectType} from "ts-expect";
import {defaultValue, isNotNull, isNull, map, mapNull, notNull} from "./index";

function numberOrNull(): number | null {
    return 3;
}

function numberOrUndefined(): number | undefined {
    return 3;
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
function numberOrVoid(): number | void {
    return 3;
}

test("isNull", t => {
    t.true(isNull(null));
    t.true(isNull(undefined));
    t.false(isNull(3));
    t.false(isNull(numberOrNull()));
    t.false(isNull(numberOrUndefined()));
    t.false(isNull(numberOrVoid()));
});

test("isNotNull", t => {
    t.false(isNotNull(null));
    t.false(isNotNull(undefined));
    t.true(isNotNull(3));
    const a = numberOrNull();
    t.true(isNotNull(a));
    if (isNotNull(a)) {
        expectType<number>(a);
    }
    const b = numberOrUndefined();
    t.true(isNotNull(b));
    if (isNotNull(b)) {
        expectType<number>(b);
    }
    const c = numberOrVoid();
    t.true(isNotNull(c));
    if (isNotNull(c)) {
        expectType<number>(c);
    }
});

test("notNull", t => {
    t.is(notNull(numberOrNull()), 3);
    expectType<number>(notNull(numberOrNull()));
    t.is(notNull(numberOrUndefined()), 3);
    expectType<number>(notNull(numberOrUndefined()));
    t.is(notNull(numberOrVoid()), 3);
    expectType<number>(notNull(numberOrVoid()));
});

test("defaultValue", t => {
    t.is(defaultValue(null, 5), 5);
    t.is(defaultValue(undefined, 5), 5);
    t.is(defaultValue(3, 5), 3);
    t.is(defaultValue(numberOrNull(), 5), 3);
    t.is(defaultValue(numberOrUndefined(), 5), 3);
    t.is(defaultValue(numberOrVoid(), 5), 3);
});

test("map", t => {
    t.is(
        map(null, (e: number) => e + 1),
        null
    );
    t.is(
        map(undefined, (e: number) => e + 1),
        null
    );
    t.is(
        map(2, e => e + 1),
        3
    );
    t.is(
        map(2, () => null),
        null
    );
    t.is(
        map(2, () => {}),
        null
    );
    t.is(
        map(numberOrNull(), e => e + 1),
        4
    );
    expectType<number | null>(map(numberOrNull(), e => e + 1));
    t.is(
        map(numberOrUndefined(), e => e + 1),
        4
    );
    expectType<number | null>(map(numberOrUndefined(), e => e + 1));
    t.is(
        map(numberOrVoid(), e => e + 1),
        4
    );
    expectType<number | null>(map(numberOrVoid(), e => e + 1));
});

test("mapNull", t => {
    t.is(
        mapNull(null, () => 5),
        5
    );
    t.is(
        mapNull(undefined, () => 5),
        5
    );
    t.is(
        mapNull(3, () => 5),
        3
    );
    t.is(
        mapNull(numberOrNull(), () => 5),
        3
    );
    t.is(
        mapNull(numberOrUndefined(), () => 5),
        3
    );
    t.is(
        mapNull(numberOrVoid(), () => 5),
        3
    );
});
