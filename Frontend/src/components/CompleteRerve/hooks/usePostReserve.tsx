import { useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSeletor } from "../../../redux/store";
import { formatearFecha } from "./const";
import { useNavigate } from "react-router-dom";
import { diferenciaEnDias } from "../../SummaryBooking/const";
import { clearCars } from "../../../redux/carsSlice";
import { reseCoberturas } from "../../../redux/coberturasSlice";
import { resetReserve } from "../../../redux/reserveSlice";

function usePostReserve(isLogin: boolean) {
  const dataReduces = useAppSeletor((state) => state);
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "https://gocarapp.onrender.com/api";
  const dispatch = useAppDispatch();

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

      navigate("/");
    });
  };

  const createReservation = () => {
    const urlCreateReserve =
      "https://gocarapp.onrender.com/api/reservation/save";

    const token = window.localStorage.getItem("token");

    const postData = {
      vehicleId: dataAutoReduce.id,
      retirementAgencyId: dataReservaReduce?.idLugarRetiro,
      insuranceId: dataCoberturasReduce.seguridad.id,
      retirementDate: formatearFecha(
        dataReservaReduce?.fechaRetiro as string,
        dataReservaReduce?.horaRetiro as string
      ),
      returnAgencyId: dataReservaReduce?.idLugarEntrega,
      returnDate: formatearFecha(
        dataReservaReduce?.fechaEntrega as string,
        dataReservaReduce?.horaEntrega as string
      ),
    };

    axios
      .post(urlCreateReserve, postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // clearCars reseCoberturas resetReserve
    dispatch(clearCars());
    dispatch(reseCoberturas());
    dispatch(resetReserve());
  };

  const completeReservationAction = () => {
    if (!isLogin) {
      navigate(links);
    } else {
      setShowReservation(true);
      setTimeout(() => {
        if (isLogin && pagarMercadopago) {
          externalLink();
          createReservation();
        } else if (isLogin && !pagarMercadopago) {
          createReservation();
          setShowReservation(false);
        }
      }, 1000);
    }
  };

  return {
    links,
    title,
    text,
    data,
    loading,

    pagarMercadopago,
    showReservation,
    completeReservationAction,
  };
}

export default usePostReserve;
