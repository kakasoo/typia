import typia from "typia";

import { _test_http_assertFormData } from "../../internal/_test_http_assertFormData";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createAssertFormData_ObjectHttpArray =
  _test_http_assertFormData("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(typia.http.createAssertFormData<ObjectHttpArray>());