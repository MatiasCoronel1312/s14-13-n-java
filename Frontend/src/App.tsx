import "./App.css";

import TimeLine from "./components/timeline/TimeLine";
import MainRouter from "./router/mainRouter";
import TarifasSection from "./components/TarifasSection/TarifasSection";
import CoberturasSection from "./components/CoberturasSection/CoberturasSection";

function App() {
  return (
    <>
      <MainRouter />
      <TimeLine />
      <TarifasSection />
      <CoberturasSection />
    </>
  );
}

export default App;
