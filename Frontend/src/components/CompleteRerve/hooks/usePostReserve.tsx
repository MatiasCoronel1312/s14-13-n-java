import { useState } from "react";
import axios from "axios";
import { useAppSeletor } from "../../../redux/store";
import { formatearFecha } from "./const";
import { useNavigate } from "react-router-dom";
import { diferenciaEnDias } from "../../SummaryBooking/const";

function usePostReserve(isLogin: boolean) {
  const dataReduces = useAppSeletor((state) => state);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "https://gocarapp.onrender.com/api";

  const dataReservaReduce = dataReduces.dataReserve.dataReserve;
  const dataAutoReduce = dataReduces.carro.cars[0];
  const dataCoberturasReduce = dataReduces.coberturas.cargos;

  const postData = {
    vehicleId: dataAutoReduce.id,
    retirementAgencyId: 0,
    insuranceId: dataCoberturasReduce.seguridad.id,
    retirementDate: formatearFecha(
      dataReservaReduce?.fechaRetiro as string,
      dataReservaReduce?.horaRetiro as string
    ),
    returnAgencyId: 0,
    returnDate: formatearFecha(
      dataReservaReduce?.fechaEntrega as string,
      dataReservaReduce?.horaEntrega as string
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
    const totalDay = diferenciaEnDias(
      dataReservaReduce?.fechaEntrega as string,
      dataReservaReduce?.fechaRetiro as string
    );

    const totalPrice =
      dataAutoReduce.price + dataCoberturasReduce.seguridad.price;

    const totalInpuesto = totalPrice + dataCoberturasReduce.metodoPago.price;

    const urlMercadoPago = url + "/mercadopago/pay";
    const dataMercadoPago = {
      title: `${dataAutoReduce.model}`,
      quantity: totalDay,
      price: totalInpuesto,
    };

    axios.post(urlMercadoPago, dataMercadoPago).then((response) => {
      const urlRespose = response.data.slice(9);
      setShowReservation(false);
      window.open(urlRespose, "_blank");
      window.location.reload();
    });
  };

  const completeReservationAction = () => {
    if (!isLogin) {
      navigate(links);
    } else {
      setShowReservation(true);
      setTimeout(() => {
        if (isLogin && pagarMercadopago) {
          externalLink();
        } else if (isLogin && !pagarMercadopago) {
          window.location.href = "/";
          setShowReservation(false);
        }
        sendData();
      }, 1000);
    }
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
