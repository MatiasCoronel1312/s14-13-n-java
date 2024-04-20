
import { useNavigate } from "react-router-dom";
import ButtonTag from "./ButtonTag";
import { DataDestination } from "./DataDestination.interface";
import { useEffect } from "react";

interface Prop{lugar:DataDestination}

function CardTur({lugar}:Prop){
    const navigator = useNavigate();
    useEffect(() => {

        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
    }, []);
    const handleClick =(id:number)=>{
        navigator(`/DestinationDetail/${id}`)
        console.log(id);
    };
    return (
        <div onClick={()=>{handleClick(lugar.id)}} className="flex rounded-lg border-black border-2 h-[256px] w-[540px] mb-2" key={lugar.id}>
            <div className=" rounded-l-lg w-1/3  h-full">
                <img className="rounded-l-lg w-full h-full" src={lugar.images[1]} alt={lugar.title}/>
            </div>
            <div className="flex flex-col w-2/3 ">
                <div className="gap-5 p-5">
                    <h3 className="text-xl font-semibold mb-2 text-accent ">{lugar.city}</h3>
                    <p className="">{lugar.subtitle}</p>
                </div>
                <div>{
                    lugar.tag.map(o=>(
                        <ButtonTag tag={o}/>
                    ))
                    }

                </div>
            </div>
        </div>
    );
}

export default CardTur