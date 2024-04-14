import { useState } from "react";
import BackViewCard from "../BackViewCard/BackViewCard";
import { FrontViewCard } from "../FrontViewCard/FrontViewCard";
import { TCarro } from "../../assets/carsInfo";

import "./style.css";
interface Props {
  showCars: TCarro[];
  isCategory?: boolean;
}
export default function CardShowDetail({ showCars, isCategory }: Props) {
  const [indexCar, setInderCar] = useState(0);
  const [showFront, setShowFront] = useState(false);

  const addIndex = () => {
    if (indexCar < showCars.length - 1) {
      setInderCar((state) => (state += 1));
    }
  };
  const lessIndex = () => {
    if (indexCar > 0) {
      setInderCar((state) => (state -= 1));
    }
  };
  const flipCard = () => {
    setShowFront(!showFront);
  };
  return (
    <div className={`card  ${showFront ? "flipped" : ""}`}>
      <div className="card-inner">
        <div
          className={`card-front transition-all   ${showFront ? "hidden" : ""}`}
        >
          <FrontViewCard
            lessIndex={lessIndex}
            addIndex={addIndex}
            showCars={showCars}
            indexCar={indexCar}
            setInderCar={setInderCar}
            flipCard={flipCard}
            isCategory={isCategory}
          />
        </div>
        <div className={`card-back ${showFront ? "" : "hidden"}`}>
          <BackViewCard
            flipCard={flipCard}
            showCars={showCars}
            indexCar={indexCar}
            isCategory={isCategory}
          />
        </div>
      </div>
    </div>
  );
}
