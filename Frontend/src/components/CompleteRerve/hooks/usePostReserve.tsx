import { useState } from "react";
import axios from "axios";
import { useAppSeletor } from "../../../redux/store";
import { formatearFecha } from "./const";
import { useNavigate } from "react-router-dom";

function usePostReserve(isLogin: boolean) {
  const dataReduces = useAppSeletor((state) => state);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "https://gocarapp.onrender.com/api/reservation/save";

  const dataReservaReduce = dataReduces.dataReserve.dataReserve;
  const dataAutoReduce = dataReduces.carro.cars[0];
  const dataCoberturasReduce = dataReduces.coberturas.cargos;

  const postData = {
    vehicleId: dataAutoReduce.id,
    retirementAgencyId: 0,
    insuranceId: dataCoberturasReduce.seguridad.id,
    retirementDate: formatearFecha(
      dataReservaReduce.fechaRetiro!,
      dataReservaReduce.horaRetiro!
    ),
    returnAgencyId: 0,
    returnDate: formatearFecha(
      dataReservaReduce.fechaEntrega!,
      dataReservaReduce.horaEntrega!
    ),
  };
  const pagarMercadopago =
    dataCoberturasReduce.metodoPago.name === "PAGAR CON MERCADOPAGO";

  let links = "";
  let title = "";
  let text = "";
  if (!isLogin) {
    links = "/Login";
    title = "Login";
    text = "Para completar tu reserva debes loguearte.";
  } else if (isLogin && pagarMercadopago) {
    links = "/";
    title = "Ir a Mercado Pago";
    text = "Completa tu pago con Mercado Pago.";
  } else if (isLogin && !pagarMercadopago) {
    links = "/";
    title = "Completa tu reserva";
    text = "Su reserva se guardara con exito.";
  }

  const sendData = async () => {
    try {
      const response = await axios.post(url, postData);
      setData(response.data);
      console.log("response", response);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const [showReservation, setShowReservation] = useState(false);

  const externalLink = () => {
    window.open("https://mercadopago.com.ar/", "_blank");
    window.location.reload();
  };

  const completeReservationAction = () => {
    console.log(postData);
    // if (!isLogin) {
    //   navigate(links);
    // } else {
    //   setShowReservation(true);
    //   setTimeout(() => {
    //     if (isLogin && pagarMercadopago) {
    //       externalLink();
    //     } else if (isLogin && !pagarMercadopago) {
    //       window.location.href = "/";
    //     }
    //     sendData();
    //     setShowReservation(false);
    //   }, 1000);
    // }
  };

  return {
    links,
    title,
    text,
    data,
    loading,
    sendData,
    pagarMercadopago,
    showReservation,
    completeReservationAction,
  };
}

export default usePostReserve;
