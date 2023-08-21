import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagArrayUnion } from "../../../structures/TagArrayUnion";

export const test_is_TagArrayUnion = _test_is("TagArrayUnion")<TagArrayUnion>(
    TagArrayUnion,
)((input) =>
    ((input: any): input is TagArrayUnion => {
        const $is_uuid = (typia.is as any).is_uuid;
        const $io0 = (input: any): boolean =>
            Array.isArray(input.items) &&
            3 === input.items.length &&
            input.items.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            ) &&
            Array.isArray(input.minItems) &&
            3 <= input.minItems.length &&
            input.minItems.every(
                (elem: any) =>
                    "number" === typeof elem &&
                    Number.isFinite(elem) &&
                    3 <= elem,
            ) &&
            Array.isArray(input.maxItems) &&
            7 >= input.maxItems.length &&
            input.maxItems.every(
                (elem: any) =>
                    ("string" === typeof elem && 7 >= elem.length) ||
                    ("number" === typeof elem &&
                        Number.isFinite(elem) &&
                        7 >= elem),
            ) &&
            Array.isArray(input.both) &&
            3 <= input.both.length &&
            7 >= input.both.length &&
            input.both.every(
                (elem: any) => "string" === typeof elem && $is_uuid(elem),
            );
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
            )
        );
    })(input),
);