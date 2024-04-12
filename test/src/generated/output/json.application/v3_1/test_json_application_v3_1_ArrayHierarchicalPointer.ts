import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayHierarchicalPointer } from "../../../../structures/ArrayHierarchicalPointer";

export const test_json_application_v3_1_ArrayHierarchicalPointer =
  _test_json_application({
    version: "3.1",
    name: "ArrayHierarchicalPointer",
  })({
    version: "3.1",
    components: {
      schemas: {
        ArrayHierarchicalPointer: {
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.ICompany",
              },
            },
          },
          required: ["value"],
        },
        "ArrayHierarchicalPointer.ICompany": {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            serial: {
              type: "number",
            },
            name: {
              type: "string",
            },
            established_at: {
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
            },
            departments: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.IDepartment",
              },
            },
          },
          required: ["id", "serial", "name", "established_at", "departments"],
        },
        "ArrayHierarchicalPointer.ITimestamp": {
          type: "object",
          properties: {
            time: {
              type: "number",
            },
            zone: {
              type: "number",
            },
          },
          required: ["time", "zone"],
        },
        "ArrayHierarchicalPointer.IDepartment": {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            code: {
              type: "string",
            },
            sales: {
              type: "number",
            },
            created_at: {
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
            },
            employees: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayHierarchicalPointer.IEmployee",
              },
            },
          },
          required: ["id", "code", "sales", "created_at", "employees"],
        },
        "ArrayHierarchicalPointer.IEmployee": {
          type: "object",
          properties: {
            id: {
              type: "number",
            },
            name: {
              type: "string",
            },
            age: {
              type: "number",
            },
            grade: {
              type: "number",
            },
            employeed_at: {
              $ref: "#/components/schemas/ArrayHierarchicalPointer.ITimestamp",
            },
          },
          required: ["id", "name", "age", "grade", "employeed_at"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/ArrayHierarchicalPointer",
      },
    ],
  });
