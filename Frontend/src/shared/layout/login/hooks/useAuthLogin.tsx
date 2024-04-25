import axios from "axios";

import { useNavigate } from "react-router-dom";
import { postUser } from "../../../../redux/UserSlice";
import { useAppDispatch, useAppSeletor } from "../../../../redux/store";
import { saveToken } from "../../../../redux/tokenSlice";

export default function useAuthLogin() {
  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  let path = "/";

  // add check if is from reserva or not in the redux state
  const dataReduces = useAppSeletor((state) => state);

  const hasDataInsurance =
    dataReduces.coberturas.cargos.seguridad.name.length > 3;

  // si tiene los datos sera enviado ala pagina de finalizar reserva
  if (hasDataInsurance) {
    path = "/finalizar-pago";
  }

  const isLoginSuccess = (token: string) => {
    // Aqui se puede hacer algo con el token o el usuario
    const urlDataUser = "https://gocarapp.onrender.com/api/user/profile";

    // Aqui se guarda el token
    dispatch(saveToken(token));

    axios
      .get(urlDataUser, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(postUser(response.data));
        navigator(path);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return { isLoginSuccess };
}
