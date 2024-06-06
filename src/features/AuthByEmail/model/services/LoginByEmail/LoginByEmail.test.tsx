import axios from "axios";
import { LoginByEmail } from "./LoginByEmail";
import { Dispatch } from "redux";
import { StateSchema } from "app/providers/StoreProvider";
import { setAuthData } from "../../../../../entities/User/model/slice/UserSlice";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("loginByUsername.test", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });
  test("", async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: { email: "lizakobzeva@list.ru", id: "I7yy6Eu" } })
    );
    const action = LoginByEmail({
      email: "lizakobzeva@list.ru",
      password: "12345678",
    });
    const result = await action(dispatch, getState, undefined);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    // expect(dispatch).toHaveBeenCalledWith(
    //   setAuthData({ name: "liza", id: "I7yy6Eu" })
    // );
  });
});
