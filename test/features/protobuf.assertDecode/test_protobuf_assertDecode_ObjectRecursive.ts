import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_assertDecode_ObjectRecursive =
    _test_protobuf_assertDecode("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<ObjectRecursive>(input),
        encode: typia.protobuf.createEncode<ObjectRecursive>(),
    });