import { useEffect } from "react";
import NuevaReservaPrueba from "../components/NuevaReserva/NuevaReservaPrueba";
import { FaPlane } from "react-icons/fa6";
import { useAppDispatch, useAppSeletor } from "../redux/store";
import { getAgencias } from "../redux/agenciasSlice";
import { postReserve } from "../redux/reserveSlice";

const RedDeAgencias = () => {
 const dispatch = useAppDispatch();
 const allAgencias = useAppSeletor(state=>state.allAgencias.agencias)

 const agencias = [
 {
   id:0,
   name: 'Aeropuerto - Bahia Blanca',
   country: 'Bahia Blanca',
   address: 'Aeropuerto Cte. Espora, S/n,',
   tel: '+54 (291) 1234599',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id:1,
   name: 'Aeropuerto - Aeroparque',
   country: 'Buenos Aires',
   address: 'Avenida Rafael Obligado, S/n, Ciudad Autonoma',
   tel: '0800 999 9999',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id:2,
   name: 'Aeropuerto - Ezeiza',
   country: 'Buenos Aires',
   address: 'Tte Gral Ricchieri, S/n, Ezeiza',
   tel: '0800 999 9999',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id: 3,
   name: 'Centro - Bahia Blanca',
   country: 'Bahia Blanca',
   address: 'Rua Guemes 25',
   tel: '+54 291 4567890',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id:4,
   name: 'Centro - Retiro - Ciudad de Buenos Aires',
   country: 'Buenos Aires',
   address: 'Cerrito, 2575, Retiro',
   tel: '0800 999 2345',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id:5,
   name: 'Centro - Mendoza',
   country: 'Mendoza',
   address: 'San Lorenzo, 545, Espacio San',
   tel: '0800 999 2345',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id:6,
   name: 'Aeropuerto - Mendoza',
   country: 'Mendoza',
   address: 'Aeropuerto De Mendoza, S/n',
   tel: '0800 999 2345',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id:7,
   name: 'Aeropuerto - Pajas Blancas - Cordoba',
   country: 'Cordoba',
   address: 'Inter Pajas Blancas De Córdoba, Km 7, Córdoba',
   tel: '0800 999 2345',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id:8,
   name: 'Agencia Centro Cordoba Ayacucho',
   country: 'Cordoba',
   address: 'Avenida Ayacucho, 382,',
   tel: '0800 999 2345',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id:9,
   name: 'Centro Cordoba',
   country: 'Cordoba',
   address: 'Av Colón, 550, Centro',
   tel: '0800 999 2345',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id: 10,
   name: 'Aeropuerto Bariloche',
   country: 'Bariloche',
   address: 'Ruta 237, S/n',
   tel: '0800 999 2345',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id: 11,
   name: 'Aeropuerto - Salta',
   country: 'Salta',
   address: 'Ruta Nacional, 51',
   tel: '0800 999 2345',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
 {
   id:12,
   name: 'Aeropuerto Internacional de Rosario',
   country: 'Rosario',
   address: 'Avenida Jorge Newbery, S2000',
   tel: '0800 999 2345',
   hora: 'Abierto 24 horas',
   excep: 'No hay excepciones registradas para esta agencia.'
 },
]

  useEffect(() => {
    dispatch(getAgencias(agencias))
  }, [])

  const handleReserve = (name:string) =>{
    dispatch(postReserve({lugar: name}))
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  const airplane = (name:string) => {
    if(name.includes('Aeropuerto')){
      return <FaPlane className="h-[35px] w-[35px]"/>
    }else{
      return <></>
    } 
  }
 
  return (
    <div className='w-full bg-background flex justify-center'>
      <div className="flex items-center flex-col lg:w-[85%] md:w-[90%] ">
        <NuevaReservaPrueba/>
       <div className="text-accent text-[32px] text-center font-semibold my-5">Red de Agencias</div>
       <div className="text-text text-[22px] text-left w-full font-semibold mb-3">Encontrá la agencia más cercana:</div>
       <div className="w-full rounded-[10px] my-10">
        {
          allAgencias.map((agencia, index)=>
            <div key={agencia.id} className={`text-text w-full h-28 bg-[#${index%2===0?'F8C381':'background'}] flex justify-between`}>
              <div className="flex justify-center items-center h-full w-28 ">{airplane(agencia.name)}</div>
              <div className="h-full flex flex-col justify-evenly w-[25%]">
                <div className="font-semibold text-[16px]">{agencia.country}</div>
                <div className="text-[18px]">{agencia.name}</div>
              </div>
              <div className="h-full flex flex-col justify-evenly w-[35%]">
                <div>
                  <div className="font-semibold text-[14px]">Direccion:</div>
                  <div className="text-[14px]">{agencia.address}</div>
                </div>
                <div>
                  <div className="font-semibold text-[14px]">Horario:</div>
                  <div className="text-[14px]">{agencia.hora}</div>
                </div>
              </div>
              <div className="h-full flex flex-col justify-evenly w-[30%]">
                <div>
                  <div className="font-semibold text-[14px]">Telefono:</div>
                  <div className="text-[14px]">{agencia.tel}</div>
                </div>
                <div>
                  <button onClick={()=>{handleReserve(agencia.name)}} className="Gradient-H_hover border-2 border-accent text-accent hover:text-text hover:border-none w-3/4 h-10 rounded-lg ">Reservar</button>
                </div>
              </div>
            </div>
          )
        }
       </div>
      </div>  
    </div> 
  )
}
export default RedDeAgencias;