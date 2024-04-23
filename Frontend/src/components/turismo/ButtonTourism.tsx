import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    path: string;
}

const ButtonTourism = ({ title, path }: Props) => {
    const [isHover, setIsHover] = useState(
        "bg-[#EF2A06] text-[background]"
    );
    return (
        <Link to={path}>
            <div
            onMouseEnter={() => setIsHover("bg-[#EF2A06] border-2 border-[#B81C00] text-[background]")}
            onMouseLeave={() =>
                setIsHover("bg-[#EF2A06] text-[background]")
            }
            className={`${isHover} w-[334px] h-[62px] flex justify-center items-center  active:border-[#F8C381] active:text-[#F8C381] rounded-md `}
            >
                <p className="text-xl font-normal">{title}</p>
            </div>
        </Link>
    );
}

export default ButtonTourism