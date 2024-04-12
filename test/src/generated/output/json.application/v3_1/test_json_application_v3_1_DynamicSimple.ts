import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicSimple } from "../../../../structures/DynamicSimple";

export const test_json_application_v3_1_DynamicSimple = _test_json_application({
  version: "3.1",
  name: "DynamicSimple",
})({
  version: "3.1",
  components: {
    schemas: {
      DynamicSimple: {
        type: "object",
        properties: {
          value: {
            type: "object",
            properties: {},
            additionalProperties: {
              type: "number",
            },
          },
        },
        required: ["value"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/DynamicSimple",
    },
  ],
});
