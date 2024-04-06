import "./App.css";
import SelectForCategory from "./components/SelectForCategory/SelectForCategory";

import MainRouter from "./router/mainRouter";
import TimeLine from "./components/timeline/TimeLine";
import TarifasSection from "./components/TarifasSection/TarifasSection";
import CoberturasSection from "./components/CoberturasSection/CoberturasSection";

function App() {
  return (
    <>
      <MainRouter />
      <TimeLine />
      <TarifasSection />
      <CoberturasSection />
      <SelectForCategory />
    </>
  );
}

export default App;
