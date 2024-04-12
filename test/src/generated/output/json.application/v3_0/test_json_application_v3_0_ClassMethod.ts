import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ClassMethod } from "../../../../structures/ClassMethod";

export const test_json_application_v3_0_ClassMethod = _test_json_application({
  version: "3.0",
  name: "ClassMethod",
})({
  version: "3.0",
  components: {
    schemas: {
      "ClassMethod.Animal": {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          age: {
            type: "number",
          },
        },
        nullable: false,
        required: ["name", "age"],
      },
    },
  },
  schemas: [
    {
      $ref: "#/components/schemas/ClassMethod.Animal",
    },
  ],
});