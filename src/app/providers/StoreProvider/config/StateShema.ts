import { CounterShema } from "entities/Counter";
import { UserShema } from "entities/User";
import { LoginShema } from "features/AuthByEmail/model/types/LoginShema";
import { RegisterShema } from "features/AuthByEmail/model/types/RegisterShema";

export interface StateShema {
  register: RegisterShema;
  counter: CounterShema;
  user: UserShema;
  login: LoginShema;
}
