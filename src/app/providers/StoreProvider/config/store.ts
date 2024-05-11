import { configureStore } from "@reduxjs/toolkit";

import { StateShema } from "./StateShema";
import { CounterSlice } from "entities/Counter";

export function CreateReduxStore(initialState?: StateShema) {
  return configureStore<StateShema>({
    reducer: {
      counter: CounterSlice,
    },
    devTools: _isDev,
    preloadedState: initialState,
  });
}
