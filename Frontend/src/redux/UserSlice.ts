import { createSlice } from "@reduxjs/toolkit";
export interface TUser {
  id?: number;
  name?: string;
  lastName?: string;
  email?: string;
  identification?: string;
  identificationNumber?: string;
  country?: string;
  phoneNumber?: string;
  password?: string;
}
interface TInicial {
  userData?: TUser;
}

const estadoInicial: TInicial = {
  userData: {
    id: 0,
    email: "correo@gmail.com",
    password: "123456",
    name: "Dummy",
    lastName: "Client",
    identification: "DNI",
    identificationNumber: "123456789",
    country: "Argentina",
    phoneNumber: "9780001111",
  },
};
const resetUser: TInicial = {
  userData: undefined,

  // {
  //   id: undefined,
  //   email: undefined,
  //   password: undefined,
  //   name: undefined,
  //   lastName: undefined,
  //   identification: undefined,
  //   identificationNumber: undefined,
  //   country: undefined,
  //   phoneNumber: undefined,
  // },
};

const userSlice = createSlice({
  name: "userData",
  initialState: estadoInicial,
  reducers: {
    postUser: (state, actions) => {
      state.userData = { ...state.userData, ...actions.payload };
    },
    deleteUser: (state) => {
      state.userData = resetUser.userData;
    },
  },
});

export const { postUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
