import {
  UnknownAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { CounterShema } from "entities/Counter/model/types/CounterShema";
import { UserShema } from "entities/User/model/types/user";
import { LoginShema } from "features/AuthByEmail/model/types/LoginShema";
import { RegisterShema } from "features/AuthByEmail/model/types/RegisterShema";
// import { CombinedState } from "redux";

export interface StateSchema {
  counter: CounterShema;
  user: UserShema;

  // Асинхронные редюсеры
  login?: LoginShema;
  register?: RegisterShema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: UnknownAction) => any;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
