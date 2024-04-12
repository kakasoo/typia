import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagRange } from "../../../../structures/TypeTagRange";

export const test_json_application_v3_1_TypeTagRange = _test_json_application({
  version: "3.1",
  name: "TypeTagRange",
})({
  version: "3.1",
  components: {
    schemas: {
      TypeTagRange: {
        type: "object",
        properties: {
          value: {
            type: "array",
            items: {
              $ref: "#/components/schemas/TypeTagRange.Type",
            },
          },
        },
        required: ["value"],
      },
      "TypeTagRange.Type": {
        type: "object",
        properties: {
          greater: {
            type: "integer",
            exclusiveMinimum: true,
            minimum: 3,
          },
          greater_equal: {
            type: "integer",
            minimum: 3,
          },
          less: {
            type: "integer",
            exclusiveMaximum: true,
            maximum: 7,
          },
          less_equal: {
            type: "integer",
            maximum: 7,
          },
          greater_less: {
            type: "integer",
            exclusiveMinimum: true,
            minimum: 3,
            exclusiveMaximum: true,
            maximum: 7,
          },
          greater_equal_less: {
            type: "integer",
            minimum: 3,
            exclusiveMaximum: true,
            maximum: 7,
          },
          greater_less_equal: {
            type: "integer",
            exclusiveMinimum: true,
            minimum: 3,
            maximum: 7,
          },
          greater_equal_less_equal: {
            type: "integer",
            minimum: 3,
            maximum: 7,
          },
          equal: {
            type: "integer",
            minimum: 10,
            maximum: 10,
          },
        },
        required: [
          "greater",
          "greater_equal",
          "less",
          "less_equal",
          "greater_less",
          "greater_equal_less",
          "greater_less_equal",
          "greater_equal_less_equal",
          "equal",
        ],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/TypeTagRange",
    },
  ],
});