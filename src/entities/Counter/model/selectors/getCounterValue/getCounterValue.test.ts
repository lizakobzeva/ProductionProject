import { StateSchema } from "app/providers/StoreProvider/config/StateShema";
import { getCounterValue } from "./getCounterValue";
describe("getCounterValue", () => {
  test("should return counter value", () => {
    const state: Partial<StateSchema> = {
      counter: { value: 0 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(0);
  });
});
