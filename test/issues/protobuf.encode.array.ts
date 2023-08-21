import fs from "fs";
import pjs from "protobufjs";
import typia from "typia";

import { ArraySimpleProtobuf } from "../structures/ArraySimpleProtobuf";

const result: pjs.IParserResult = pjs.parse(
    typia.protobuf.message<ArraySimpleProtobuf>(),
);
const type: pjs.Type = result.root.lookupType("ArraySimpleProtobuf");
const data: ArraySimpleProtobuf = ArraySimpleProtobuf.generate();

console.log(
    typia.protobuf.encode<ArraySimpleProtobuf>(data).length,
    type.encode(data).finish().length,
);

fs.writeFileSync(
    __dirname + "/protobuf.encode.array.js",
    [
        "//-------------------------------------------------",
        "// MESSAGE",
        "//-------------------------------------------------",
        ...typia.protobuf
            .message<ArraySimpleProtobuf>()
            .split("\n")
            .map((line) => `// ${line}`),
        "",
        "//-------------------------------------------------",
        "// TYPIA",
        "//-------------------------------------------------",
        `const encode = ${typia.protobuf
            .createEncode<ArraySimpleProtobuf>()
            .toString()}`,
        "",
        "//-------------------------------------------------",
        "// GOOGLE",
        "//-------------------------------------------------",
        pjs.encoder(type).toString(),
    ].join("\n"),
    "utf8",
);