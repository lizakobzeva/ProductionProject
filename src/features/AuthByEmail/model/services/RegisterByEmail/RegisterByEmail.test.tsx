import axios from "axios";
import { Dispatch } from "redux";
import { StateSchema } from "app/providers/StoreProvider";
import { setAuthData } from "../../../../../entities/User/model/slice/UserSlice";
import { RegisterByEmail } from "./RegisterByEmail";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("registerByEmail.test", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });
  test("", async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({ data: { email: "cat@cat.ru", id: "fisdhfa" } })
    );
    const action = RegisterByEmail({
      name: "cat",
      email: "cat@cat.ru",
      password: "12345678",
      likedPosts: [],
    });
    const result = await action(dispatch, getState, undefined);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    // expect(dispatch).toHaveBeenCalledWith(
    //   setAuthData({ name: "liza", id: "I7yy6Eu" })
    // );
  });
});
