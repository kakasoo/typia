import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { CommentTagLength } from "../../../../structures/CommentTagLength";

export const test_json_application_v3_0_CommentTagLength =
  _test_json_application({
    version: "3.0",
    name: "CommentTagLength",
  })({
    version: "3.0",
    components: {
      schemas: {
        CommentTagLength: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/CommentTagLength.Type",
              },
            },
          },
          nullable: false,
          required: ["value"],
        },
        "CommentTagLength.Type": {
          type: "object",
          properties: {
            fixed: {
              type: "string",
              minLength: 5,
              maxLength: 5,
            },
            minimum: {
              type: "string",
              minLength: 3,
            },
            maximum: {
              type: "string",
              maxLength: 7,
            },
            minimum_and_maximum: {
              type: "string",
              minLength: 3,
              maxLength: 7,
            },
            equal: {
              type: "string",
              minLength: 10,
              maxLength: 19,
            },
          },
          nullable: false,
          required: [
            "fixed",
            "minimum",
            "maximum",
            "minimum_and_maximum",
            "equal",
          ],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/CommentTagLength",
      },
    ],
  });