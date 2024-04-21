import { useNavigate } from "react-router-dom";
import ButtonTag from "./ButtonTag";
import { DataDestination } from "./DataDestination.interface";

interface Prop{lugar:DataDestination}

function CardTur({lugar}:Prop){
    const navigator = useNavigate();
    
    
    const handleClick =(id:number)=>{
            navigator(`/DestinationDetail/${id}`)
        
    };
    return (
        <div onClick={()=>{handleClick(lugar.id)}} className="flex rounded-lg border-text border-[1px] h-[256px] w-[540px] mb-2 bg-white shadow-lg cursor-pointer" key={lugar.id}>
            <div className=" rounded-l-lg w-1/3  h-full overflow-hidden" >
                <img className="rounded-l-lg w-full h-full object-cover" src={lugar.images[1]} alt={lugar.title}/>
            </div>
            <div className="flex flex-col w-2/3 font-mono ">
                <div className="gap-5 p-5">
                    <h3 className="text-xl font-semibold mb-2 text-accent ">{lugar.city}</h3>
                    <p className="">{lugar.subtitle}</p>
                </div>
                <div className="flex justify-start flex-wrap gap-2 px-5">{
                    lugar.tag.map(o=>(
                        <ButtonTag  tag={o}/>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CardTur