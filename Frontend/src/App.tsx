import { useEffect } from "react";
import "./App.css";
import MainRouter from "./router/mainRouter";
import apiUrl from "./env/environment.prod";
import axios from "axios";
import { useAppDispatch } from "./redux/store";
import { getAgencias } from "./redux/agenciasSlice";
import { postCars } from "./redux/carsSlice";

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
  }, []);

  useEffect(() => {
    axios
      .get(apiUrl + "/vehicles/all")
      .then((res) => {
        dispatch(postCars(res.data));
      })
      .catch(function (er) {
        console.log(er);
      });
  });

  return (
<<<<<<< HEAD
    <div className='bg-[#ffffff]'>
=======

    <div className="bg-[#ffffff]">

>>>>>>> a69aed6d3b8c1cc86ecf12d5de19465c549ed3be
      <MainRouter />
    </div>
  );
}

export default App;
