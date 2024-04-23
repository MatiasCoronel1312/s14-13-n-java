import { createSlice } from "@reduxjs/toolkit";
interface TUser {
  id: number;
  name?: string;
  lastName?: string;
  email?: string;
  identification?: string;
  identificationNumber?: string;
  country?: string;
  phoneNumber?: string;
}
interface TInicial {
  userData: TUser;
}

const estadoInicial: TInicial = {
  userData: {
    id: 0,
    name: undefined,
    lastName: undefined,
    email: undefined,
    identification: undefined,
    identificationNumber: undefined,
    country: undefined,
    phoneNumber: undefined,
  },
};

const userSlice = createSlice({
  name: "userData",
  initialState: estadoInicial,
  reducers: {
    postUser: (state, actions) => {
      state.userData = { ...state.userData, ...actions.payload };
    },
  },
});

export const { postUser } = userSlice.actions;
export default userSlice.reducer;

/**
 *   id: 0,
  name: "string",
  lastName: "string",
  email: "string",
  identification: "DNI",
  identificationNumber: "string",
  country: "string",
  phoneNumber: "string",
 */
