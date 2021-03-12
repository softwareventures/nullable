import test from "ava";
import {map} from "./index";

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
});
