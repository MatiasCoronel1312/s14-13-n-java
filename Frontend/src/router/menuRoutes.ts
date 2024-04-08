import CategoriaDeVehiculos from "../pages/CategoriaDeVehiculos";
<<<<<<< HEAD
import Dudas from "../pages/Dudas";
import Home from "../pages/Home";
import RedDeAgencias from "../pages/RedDeAgencias";
import TipsTuristicos from "../pages/TipsTuristicos";

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
      path: "/categoriasDeVehiculos",
      Element: CategoriaDeVehiculos,
    }]
=======
import DatosDePagos from "../pages/DatosDePagos";
import Dudas from "../pages/Dudas";
import Home from "../pages/Home";
import RedDeAgencias from "../pages/RedDeAgencias";
import SeleccionDeCarro from "../pages/SeleccionCarro";
import TipsTuristicos from "../pages/TipsTuristicos";

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
    id: "seleccionCarro",
    path: "/selecciona-pago",
    Element: SeleccionDeCarro,
  },
  {
    id: "finalizarPago",
    path: "/finalizar-pago",
    Element: DatosDePagos,
  },
];

// DatosDePagos
>>>>>>> 1a4bcde1068d542507627c21c413cc6b7ade52c4
