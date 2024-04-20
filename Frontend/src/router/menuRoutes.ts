import CategoriaDeVehiculos from "../pages/CategoriaDeVehiculos";
import DatosDePagos from "../pages/DatosDePagos";
import Dudas from "../pages/Dudas";
import Home from "../pages/Home";
import RedDeAgencias from "../pages/RedDeAgencias";
import SeleccionDeCarro from "../pages/SeleccionCarro";
import TipsTuristicos from "../pages/TipsTuristicos";
import { Login } from "../shared/layout/login/Login";
import Registro from "../pages/Registro";
import DestinationDetail from "../components/DestinationDetail/DestinationDetail";
import BookingHistory from "../pages/BookingHistory";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "redDeAgencias",
    path: "/redDeAgencias",
    Element: RedDeAgencias,
  },
  {
    id: "tipsTuristicos",
    path: "/tipsTuristicos",
    Element: TipsTuristicos,
  },
  {
    id: "dudas",
    path: "/dudas",
    Element: Dudas,
  },
  {
    id: "categoriasDeVehiculos",
    path: "/categoriasDeVehiculos/:destino",
    Element: CategoriaDeVehiculos,
  },
  {
    id: "login",
    path: "/login",
    Element: Login,
  },
  {
    id: "seleccionCarro",
    path: "/selecciona-pago",
    Element: SeleccionDeCarro,
  },
  {
    id: "finalizarPago",
    path: "/finalizar-pago",
    Element: DatosDePagos,
  },

  {
    id: "Registro",
    path: "/registro",
    Element: Registro,
  },
  {
    id: "DestinationDetail",
    path: "/DestinationDetail/:id",
    Element: DestinationDetail,
  },
  {
    id: "history",
    path: "/history",
    Element: BookingHistory,
  },
];

// DatosDePagos
