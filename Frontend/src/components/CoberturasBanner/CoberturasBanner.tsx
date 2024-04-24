import { FaCheck } from "react-icons/fa6";

import { CgEye } from "react-icons/cg";
import { useAppDispatch } from "../../redux/store";
import { postTarifaSeguridad } from "../../redux/coberturasSlice";
interface Props {
  id: number;
  name: string;
  price: number;
  coberturaSelected: string;
  setCoberturaSelected: (coberturaName: string) => void;
}

export default function CoberturasBanner({
  id,
  name,
  price,
  coberturaSelected,
  setCoberturaSelected,
}: Props) {
  const dispatch = useAppDispatch();
  const isChecked = coberturaSelected === name;

  const resetSeguridad = () => {
    setTimeout(() => {
      setCoberturaSelected("");
    }, 200);

    dispatch(
      postTarifaSeguridad({
        name: "",
        price: 0,
      })
    );
  };

  const addSeguridad = () => {
    dispatch(
      postTarifaSeguridad({
        id,
        name,
        price,
      })
    );
    setCoberturaSelected(name);
  };

  const handlerChecked = () => {
    isChecked ? resetSeguridad() : addSeguridad();
  };

  return (
    <section className="flex justify-between px-6 bg-[#FFF6EC] py-8 border-l-transparent border-2 border-black rounded-r-xl">
      <div className="flex items-center gap-4">
        <CgEye size={28} className="text-[#854900]" />
        <p className="text-3xl font-light">{name}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-2xl font-extralight ">US$ {price} / dia</p>
        {/* <Custom Check Box Area /> */}
        <div
          onClick={handlerChecked}
          className={`${
            isChecked ? "bg-gradient-to-l from-[#B81C00] to-[#FF8C00] " : ""
          } h-6 w-6 border bg-gray-300  border-gray-500 hover:cursor-pointer flex justify-center items-center`}
        >
          {isChecked ? <FaCheck className="text-white" /> : ""}
        </div>
        {/* <Custom Check Box Area /> */}
      </div>
    </section>
  );
}
