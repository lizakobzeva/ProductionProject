import { configureStore } from "@reduxjs/toolkit";

import { StateShema } from "./StateShema";
import { CounterSlice } from "entities/Counter";
import { UserSlice } from "entities/User";

export function CreateReduxStore(initialState?: StateShema) {
  return configureStore<StateShema>({
    reducer: {
      counter: CounterSlice,
      user: UserSlice,
    },
    devTools: _isDev,
    preloadedState: initialState,
  });
}
