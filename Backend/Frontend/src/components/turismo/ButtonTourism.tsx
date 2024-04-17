import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    path: string;
}

const ButtonTourism = ({ title, path }: Props) => {
    const [isHover, setIsHover] = useState(
        "border-2 border-[#B81C00] text-[#B81C00]"
    );
    return (
        <Link to={path}>
            <div
            onMouseEnter={() => setIsHover("border border-[#FF8C00] text-[#FF8C00]")}
            onMouseLeave={() =>
                setIsHover("border-2 border-[#B81C00] text-[#B81C00]")
            }
            className={`${isHover} border-2 border-[#B81C00] w-[334px] h-[62px] flex justify-center items-center  active:border-[#F8C381] active:text-[#F8C381] rounded-md `}
            >
                <p className="text-xl font-normal">{title}</p>
            </div>
        </Link>
    );
}

export default ButtonTourism