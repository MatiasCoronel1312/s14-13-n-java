import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

export default function CustomCheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  const handlerChecked = () => {
    setIsChecked((state) => !state);
  };
  return (
    <div
      onClick={handlerChecked}
      className={`${
        isChecked ? "bg-gradient-to-l from-[#B81C00] to-[#FF8C00] " : ""
      } h-6 w-6 border bg-gray-300  border-gray-500 hover:cursor-pointer flex justify-center items-center`}
    >
      {isChecked ? <FaCheck className="text-white" /> : ""}
    </div>
  );
}
