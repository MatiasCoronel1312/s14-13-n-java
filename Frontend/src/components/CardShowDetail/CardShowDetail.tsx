import { useState } from "react";
import BackViewCard from "../BackViewCard/BackViewCard";
import { FrontViewCard } from "../FrontViewCard/FrontViewCard";
import { TCarro } from "../../assets/carsInfo";
interface Props {
  showCars: TCarro[];
}
export default function CardShowDetail({ showCars }: Props) {
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
    <div className={`card ${showFront ? "flipped" : ""}`}>
      <div className="card-inner">
        <div className="card-front">
          <FrontViewCard
            lessIndex={lessIndex}
            addIndex={addIndex}
            showCars={showCars}
            indexCar={indexCar}
            setInderCar={setInderCar}
            flipCard={flipCard}
          />
        </div>
        <div className="card-back">
          <BackViewCard
            flipCard={flipCard}
            showCars={showCars}
            indexCar={indexCar}
          />
        </div>
      </div>
    </div>
  );
}
