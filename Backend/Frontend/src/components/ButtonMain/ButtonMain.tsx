import { useState } from "react";
<<<<<<< HEAD
=======

>>>>>>> 1a4bcde1068d542507627c21c413cc6b7ade52c4

interface Props {
  title: string;
}
export default function ButtonMain({ title }: Props) {
  const [isHover, setIsHover] = useState(
    "bg-gradient-to-l  from-[#B81C00] to-[#FF8C00]"
  );

  return (
    <div>
<<<<<<< HEAD
=======

>>>>>>> 1a4bcde1068d542507627c21c413cc6b7ade52c4
      <div
        onMouseEnter={() => setIsHover("bg-[#FF8C00]")}
        onMouseLeave={() =>
          setIsHover("bg-gradient-to-l  from-[#B81C00] to-[#FF8C00]")
        }
<<<<<<< HEAD
=======

>>>>>>> 1a4bcde1068d542507627c21c413cc6b7ade52c4
        className={`  cursor-pointer ${isHover} gap-2 ease-in-out w-[293px] h-[64px] flex justify-center items-center  active:bg-[#F8C381] border-black   rounded-tl-md rounded-br-md `}
      >
        <p className="text-white text-xl font-extralight">{title}</p>
      </div>
    </div>
<<<<<<< HEAD
=======

>>>>>>> 1a4bcde1068d542507627c21c413cc6b7ade52c4
  );
}
