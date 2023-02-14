import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TagTuple = _test_isClone(
    "TagTuple",
    TagTuple.generate,
    typia.createIsClone<TagTuple>(),
    TagTuple.SPOILERS,
);