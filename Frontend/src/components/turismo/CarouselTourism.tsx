import { useState } from "react"
import CardDestinoTurismo from "./CardDestinoTurismo"
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'

type SitioTuristico = { id: number; imagen: string; descripcion: string };

interface Props {
    showSites: SitioTuristico[];
}

const CarouselTourism = ({showSites}: Props) => {

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
        } if (indexSite == 0) {
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

    return(
        <div className="flex justify-between items-center w-full h-[230px] bg-white p-4">
            <FaCircleArrowLeft className="size-[24px] hover:cursor-pointer text-[#B81C00] mr-4" onClick={lessIndex} />
            <div className="flex flex-col w-full">
                <div className="flex justify-around">
                    <CardDestinoTurismo imagen={showSites[indexSite].imagen} descripcion={showSites[indexSite].descripcion} />
                    <div className="hidden md:block">
                    <CardDestinoTurismo imagen={imagen1.imagen} descripcion={imagen1.descripcion} />
                    </div>
                    <div className="hidden lg:block">
                    <CardDestinoTurismo imagen={imagen2.imagen} descripcion={imagen2.descripcion} />
                    </div>
                    <div className="hidden xl:block">
                    <CardDestinoTurismo imagen={imagen3.imagen} descripcion={imagen3.descripcion} />
                    </div>
                </div>
            </div>
            <FaCircleArrowRight className="size-[24px] hover:cursor-pointer text-[#B81C00] ml-4" onClick={addIndex} />
        </div>
    );
};

export default CarouselTourism;
