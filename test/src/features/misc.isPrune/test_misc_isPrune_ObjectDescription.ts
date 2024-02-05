import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_isPrune_ObjectDescription = _test_misc_isPrune(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  typia.misc.isPrune<ObjectDescription>(input),
);
