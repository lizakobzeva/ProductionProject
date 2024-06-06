import { StateSchema } from "./StateShema";
import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { createReducerManager } from "./reducerManager";
import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "../../../../entities/User";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
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
