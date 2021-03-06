import test from "ava";
import {map} from "./index";

test("map", t => {
    t.is(
        null,
        map(null, (e: number) => e + 1)
    );
    t.is(
        null,
        map(undefined, (e: number) => e + 1)
    );
    t.is(
        3,
        map(2, e => e + 1)
    );
    t.is(
        null,
        map(2, () => null)
    );
    t.is(
        null,
        map(2, () => {})
    );
});
