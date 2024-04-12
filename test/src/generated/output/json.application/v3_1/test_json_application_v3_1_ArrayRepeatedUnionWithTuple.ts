import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRepeatedUnionWithTuple } from "../../../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_application_v3_1_ArrayRepeatedUnionWithTuple =
  _test_json_application({
    version: "3.1",
    name: "ArrayRepeatedUnionWithTuple",
  })({
    version: "3.1",
    components: {
      schemas: {
        ArrayRepeatedUnionWithTuple: {
          oneOf: [
            {
              type: "number",
            },
            {
              type: "boolean",
            },
            {
              type: "array",
              items: {
                type: "string",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple",
              },
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IBox3D",
              },
            },
            {
              type: "array",
              prefixItems: [
                {
                  type: "string",
                },
                {
                  type: "number",
                },
                {
                  type: "boolean",
                },
              ],
              additionalItems: {
                type: "boolean",
              },
            },
            {
              type: "array",
              prefixItems: [
                {
                  $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IBox3D",
                },
                {
                  $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
                },
              ],
              additionalItems: {
                $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
              },
            },
          ],
        },
        "ArrayRepeatedUnionWithTuple.IBox3D": {
          type: "object",
          properties: {
            scale: {
              $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
            },
            position: {
              $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
            },
            rotate: {
              $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
            },
            pivot: {
              $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple.IPoint3D",
            },
          },
          required: ["scale", "position", "rotate", "pivot"],
        },
        "ArrayRepeatedUnionWithTuple.IPoint3D": {
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
            z: {
              type: "number",
            },
          },
          required: ["x", "y", "z"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRepeatedUnionWithTuple",
      },
    ],
  });