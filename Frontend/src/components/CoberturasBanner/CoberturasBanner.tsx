import CustomCheckBox from "../CustomCheckBox/CustomCheckBox";
import { CgEye } from "react-icons/cg";
interface Props {
  title: string;
  price: number;
}

export default function CoberturasBanner({ title, price }: Props) {
  return (
    <section className="flex justify-between px-6 bg-[#FFF6EC] py-8 border-l-transparent border-2 border-black rounded-r-xl">
      <div className="flex items-center gap-4">
        <CgEye size={28} className="text-[#854900]" />
        <p className="text-3xl font-light">{title}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-2xl font-extralight ">US$ {price} / dia</p>
        <CustomCheckBox />
      </div>
    </section>
  );
}
