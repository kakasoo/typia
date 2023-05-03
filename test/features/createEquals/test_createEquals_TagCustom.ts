import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagCustom } from "../../structures/TagCustom";

export const test_createEquals_TagCustom = _test_equals(
    "TagCustom",
    TagCustom.generate,
    typia.createEquals<TagCustom>(),
);
