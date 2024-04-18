import { useState } from "react";
import CardDestinoTurismo from "./CardDestinoTurismo";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

import { DataDestination } from "./../DestinosCard/DataDestination.interface"

interface Props {
  showSites: DataDestination[];

}

const CarouselTourism = ({ showSites }: Props) => {
  const [indexSite, setIndexSite] = useState(0);

  const addIndex = () => {
    if (indexSite < showSites.length - 1) {
      setIndexSite((state) => (state += 1));
    } else {
      setIndexSite(0);
    }
  };
  const lessIndex = () => {
    if (indexSite > 0) {
      setIndexSite((state) => (state -= 1));
    }
    if (indexSite == 0) {
      setIndexSite(showSites.length - 1);
    }
  };

  const addIndexSite = (more: number) => {
    if (indexSite <= showSites.length - 1) {
      return (indexSite + more) % showSites.length;
    } else {
      return 0;
    }
  };

  const imagen1 = showSites[addIndexSite(1)];
  const imagen2 = showSites[addIndexSite(2)];
  const imagen3 = showSites[addIndexSite(3)];

  return (
    <div className="flex justify-between items-center w-full h-[230px] bg-white p-4">
      <FaCircleArrowLeft
        className="size-[24px] hover:cursor-pointer text-[#B81C00] mr-4"
        onClick={lessIndex}
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-around">
          <CardDestinoTurismo

            id={showSites[indexSite].id}
            imagen={showSites[indexSite].images[1]}
            descripcion={showSites[indexSite].phase}
          />
          <div className="hidden md:block">
            <CardDestinoTurismo
              id={imagen1.id}
              imagen={imagen1.images[1]}
              descripcion={imagen1.phase}

            />
          </div>
          <div className="hidden lg:block">
            <CardDestinoTurismo
              id={imagen2.id}
              imagen={imagen2.images[1]}
              descripcion={imagen2.phase}

            />
          </div>
          <div className="hidden xl:block">
            <CardDestinoTurismo
              id={imagen3.id}
              imagen={imagen3.images[1]}
              descripcion={imagen3.phase}

            />
          </div>
        </div>
      </div>
      <FaCircleArrowRight
        className="size-[24px] hover:cursor-pointer text-[#B81C00] ml-4"
        onClick={addIndex}
      />
    </div>
  );
};

export default CarouselTourism;
