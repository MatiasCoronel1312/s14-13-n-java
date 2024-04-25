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
  const [showError, setShowError] = useState("");
  const [loading, setLoading] = useState(false);
  const url = "https://gocarapp.onrender.com/api";
  const dispatch = useAppDispatch();

  const dataReservaReduce = dataReduces.dataReserve.dataReserve;
  const dataAutoReduce = dataReduces.carro.cars[0];
  const dataCoberturasReduce = dataReduces.coberturas.cargos;

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
    });
  };

  const createReservation = () => {
    const urlCreateReserve =
      "https://gocarapp.onrender.com/api/reservation/save";

    const token = dataReduces.token.tokenData;

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
        setShowReservation(true);
        //setLoading(true);

        setTimeout(() => {
          setLoading(false);
          setShowReservation(false);

          // clean all reducers after complete reservation
          dispatch(clearCars());
          dispatch(reseCoberturas());
          dispatch(resetReserve());
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);

        setShowReservation(true);
        setShowError(error.response.data);
        setTimeout(() => {
          setShowReservation(false);
          setShowError("");
        }, 2000);
      });
  };

  const completeReservationAction = () => {
    if (!isLogin) {
      // navigate(links);
    } else {
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
    loading,
    showError,
    pagarMercadopago,
    showReservation,
    completeReservationAction,
  };
}

export default usePostReserve;
