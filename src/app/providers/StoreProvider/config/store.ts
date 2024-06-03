import { counterSlice } from "entities/Counter/model/slice/CounterSlice";
import { StateSchema } from "./StateShema";
import { userSlice } from "entities/User/model/slice/UserSlice";
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: _isDev,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
