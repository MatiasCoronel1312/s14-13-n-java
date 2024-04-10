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
        className={`${isHover} gap-2 ease-in-out w-[293px] h-[64px] flex justify-center items-center  active:bg-[#F8C381] border-black   rounded-tl-md rounded-br-md `}
      >
        <IconRow />
        <p className="text-white text-xl font-extralight">{title}</p>
      </div>
    </div>
  );
}

function IconRow() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.8005 2L11.8005 13"
        stroke="#F5F5F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.8005 2L15.8005 22L11.8005 13L2.80054 9L22.8005 2Z"
        stroke="#F5F5F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
