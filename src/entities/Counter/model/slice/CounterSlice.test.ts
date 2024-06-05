import { counterReducer, decrement, increment } from "./CounterSlice";
import { CounterShema } from "../types/CounterShema";

describe("CounterSlice", () => {
  test("increment", () => {
    const state: CounterShema = {
      value: 0,
    };
    expect(counterReducer(state, increment())).toEqual({ value: 1 });
  });
  test("decrement", () => {
    const state: CounterShema = {
      value: 0,
    };
    expect(counterReducer(state, decrement())).toEqual({ value: -1 });
  });
  test("should work with empty state", () => {
    const state: CounterShema = {
      value: 0,
    };
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
  });
});
