import CardDestinoTurismo from "./CardDestinoTurismo"

type SitioTuristico = {id:number, imagen: string, descripcion: string}

interface Props {
    showSites: SitioTuristico[];
    addIndex: () => void;
    lessIndex: () => void;
    indexSite: number;
    setIndexSite: (p: number) => void;
}

const CarouselTourism = ({
    showSites,   
    addIndex,
    lessIndex,
    indexSite,
    setIndexSite, 
}: Props) => {

    return(
        <div className="flex justify-between items-center w-[1000px] h-[230px] bg-gray-400 p-4">
            <p className="hover:cursor-pointer w-[25px] text-center" onClick={lessIndex}>
                {"<"}
            </p>
            <div className="flex flex-col w-full">
                <div className="flex justify-between">
                    <CardDestinoTurismo imagen={showSites[indexSite].imagen} descripcion={showSites[indexSite].descripcion} />
                    <CardDestinoTurismo imagen={showSites[indexSite].imagen} descripcion={showSites[indexSite].descripcion} />
                    <CardDestinoTurismo imagen={showSites[indexSite].imagen} descripcion={showSites[indexSite].descripcion} />
                    <CardDestinoTurismo imagen={showSites[indexSite].imagen} descripcion={showSites[indexSite].descripcion} />
                </div>
                <div className="flex w-full justify-between mt-2">
                    {showSites.map((site, index) => {
                        const isSelected = indexSite === index;
                        return (
                            <>
                                {isSelected ? (
                                    <p
                                        className={`h-3 w-6 rounded-full bg-gradient-to-l transition-all duration-[800ms]  ease-in  from-[#B81C00] to-[#FF8C00] `}
                                    ></p>
                                ) : (
                                    <p
                                        onClick={() => setIndexSite(index)}
                                        key={site.id}
                                        className={`h-3 relative z-50 hover:cursor-pointer rounded-full "w-3  bg-gray-200/45"
                                        ${isSelected ? "" : "w-3  bg-gray-200/45"} `}
                                    ></p>
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
            <p className="hover:cursor-pointer w-[25px] text-center" onClick={addIndex}>
                {">"}
            </p>
        </div>
    );
};

export default CarouselTourism