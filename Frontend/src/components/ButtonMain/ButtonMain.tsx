import { useState } from "react";

interface Props {
  title: string;
}
export default function ButtonMain({ title }: Props) {
  const [isHover, setIsHover] = useState(
    "bg-gradient-to-l  from-[#B81C00] to-[#FF8C00]"
  );

  return (
    <div>
      <div
        onMouseEnter={() => setIsHover("bg-[#FF8C00]")}
        onMouseLeave={() =>
          setIsHover("bg-gradient-to-l  from-[#B81C00] to-[#FF8C00]")
        }
        className={`  cursor-pointer ${isHover} gap-2 ease-in-out w-[293px] h-[64px] flex justify-center items-center  active:bg-[#F8C381] border-black   rounded-[10px] `}
      >
        <p className="text-white text-xl font-extralight">{title}</p>
      </div>
    </div>
  );
}
