import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_createValidateClone_ObjectDescription =
  _test_misc_validateClone("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )(typia.misc.createValidateClone<ObjectDescription>());
