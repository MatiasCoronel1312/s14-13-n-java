import { useEffect } from "react";
import "./App.css";
import MainRouter from "./router/mainRouter";
import apiUrl from "./env/environment.prod";
import axios from "axios";
import { useAppDispatch } from "./redux/store";
import { getAgencias } from "./redux/agenciasSlice";
import { postCars } from "./redux/carsSlice";
import { DataDestination } from "./components/DestinosCard/DataDestination.interface";
import { getDestinos } from "./redux/destinationSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get(apiUrl + "/agencies")
      .then((res) => {
        dispatch(getAgencias(res.data));
      })
      .catch(function (er) {
        console.log(er);
      });
      axios
      .get(apiUrl + "/vehicles/all")
      .then((res) => {
        dispatch(postCars(res.data));
      })
      .catch(function (er) {
        console.log(er);
      });
      
      axios.get<DataDestination[]>("https://gocarapp.onrender.com/api/destination/all")
      .then(response => {
        dispatch(getDestinos(response.data));    

      });
      
  }, []);

  return (
    <div className='bg-[#ffffff]'>
      <MainRouter />
    </div>
  );
}

export default App;
