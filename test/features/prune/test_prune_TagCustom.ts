import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { TagCustom } from "../../structures/TagCustom";

export const test_prune_TagCustom = _test_prune(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.prune(input),
);
