import { useAppDispatch } from "app/providers/StoreProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { FirebaseApp } from "shared/config/firebase";
import { setError } from "../../slice/LoginSlice";

const auth = getAuth(FirebaseApp);

export const LoginByEmail = async (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { User } from "entities/User/model/types/user";

// export interface LoginByEmailTypes {
//   email: string;
//   password: string;
// }
// export const LoginByEmail = createAsyncThunk(
//   "login/loginByEmail",
//   async (authData: LoginByEmailTypes) => {
//     try {
//       const response = await axios.post<User>(
//         "http://localhost:8000/login",
//         authData
//       );
//       return response.data;
//     } catch (e) {
//       console.log(e);
//     }
//   }
// );
