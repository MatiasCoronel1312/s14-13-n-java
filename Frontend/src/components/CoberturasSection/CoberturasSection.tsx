import { CgEye } from "react-icons/cg";
import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";
export default function CoberturasSection() {
  return (
    <section className="w-[1200px] min-h-[707px] h-[907px] bg-background mx-auto  px-2">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-light">
          Elige la tarifa que mejor se adapte a tus necesidades
        </p>
        <p className="text-[#854900] text-md font-light ">
          Conoce las protecciones adicionales
        </p>
      </div>
      <div className="my-20 ">
        <p className="text-[#854900] text-xl font-light mb-20">Coberturas</p>
        <p className=" text-xl font-light ">Mas seguridad en tu viaje</p>
      </div>
      <div className="flex flex-col w-full  gap-16">
        <section className="flex justify-between px-6 bg-[#FFF6EC] py-8 border-l-transparent border-2 border-black rounded-r-xl">
          <div className="flex items-center gap-4">
            <CgEye size={28} className="text-[#854900]" />
            <p className="text-3xl font-light">
              Protección Especial con Franquicia
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-2xl  font-extralight">US$ 0,03 / dia</p>
            <CustomCheckBox />
          </div>
        </section>
        {/*  */}
        <section className="flex justify-between px-6 bg-[#FFF6EC] py-8 border-l-transparent border-2 border-black rounded-r-xl">
          <div className="flex items-center gap-4">
            <CgEye size={28} className="text-[#854900]" />
            <p className="text-3xl font-light">
              Protección Especial con Franquicia
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-2xl font-extralight ">US$ 20,00 / dia</p>
            <CustomCheckBox />
          </div>
        </section>
      </div>
    </section>
  );
}
