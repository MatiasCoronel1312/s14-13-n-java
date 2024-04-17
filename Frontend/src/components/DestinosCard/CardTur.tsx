interface DestinosCard {
    lugar:{ 
        id: number;
        imagen: string;
        name: string;
        description: string;}
}

function CardTur({lugar}:DestinosCard){
    return (
        <div className="flex rounded-lg border-black border-2 h-[256px] w-[540px] mb-2" key={lugar.id}>
            <div className=" rounded-l-lg w-1/3  h-full">
                <img className="rounded-l-lg w-full h-full" src={lugar.imagen} alt={lugar.imagen}/>
            </div>
            <div className="flex flex-col w-2/3">
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-accent">{lugar.name}</h3>
                </div>
                <div>
                    <p>{lugar.description}</p>
                </div>
                <div>
                    <button className="btn border-accent border-2 text-accent">Fiestas</button>
                </div>
            </div>
        </div>
    );
}

export default CardTur