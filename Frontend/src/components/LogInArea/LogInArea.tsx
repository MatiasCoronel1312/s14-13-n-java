import { useState } from "react";
import { useAppDispatch, useAppSeletor } from "../../redux/store";
import { Link } from "react-router-dom";
import { deleteUser } from "../../redux/UserSlice";

export default function LogInArea() {
  const userReduces = useAppSeletor((state) => state.user.userData);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(deleteUser());
  };

  const userIsLogin = userReduces != undefined;
  console.log("dataUserReduces", userReduces);

  return (
    <section className="text-roboto font-semibold text-[#FFFFFF] ">
      {userIsLogin ? (
        <section className="flex justify-center items-center gap-2 relative">
          <div>
            <p className="relative top-1">{userReduces.name}</p>
            <p className="relative bottom-1">{userReduces.lastName}</p>
          </div>

          <div
            onClick={() => setShowMenu(true)}
            className="flex justify-center items-center bg-gradient-to-l  from-[#B81C00] to-[#FF8C00] w-[44px] h-[44px] rounded-full  cursor-pointer "
          >
            <p>{userReduces?.name ? userReduces.name[0] : " "}</p>
            <p>{userReduces?.lastName ? userReduces.lastName[0] : " "}</p>
          </div>
          <section
            className={` ${
              showMenu ? "block  " : "hidden  "
            } absolute  shadow-2xl min-w-[160px]  top-[50px] py-2 left-4 rounded-2xl bg-white border-2 border-[#707070] flex justify-center items-center gap-2`}
            onMouseLeave={() => setShowMenu(false)}
          >
            <div className="flex flex-col justify-between items-start gap-2  ">
              <Link
                to="#"
                className=" hover:bg-gray-400 w-[140px] h-[44px] transition-all flex justify-center items-center  rounded-2xl  text-[#333333] "
              >
                Mis Reservas
              </Link>

              <p
                onClick={handleLogOut}
                className="hover:bg-gray-400 w-[140px] h-[44px] transition-all flex justify-start items-center pl-5  rounded-2xl cursor-pointer  text-[#B81C00] "
              >
                Log Out
              </p>
            </div>
          </section>
        </section>
      ) : (
        <Link
          to="/Login"
          className="flex  Gradient-H w-[136px] h-[44px] rounded-[5px] text-center cursor-pointer hover:bg-primary "
        >
          <div className="text-primary text-[20px] py-[5px] z-10 bg-[#707070] m-auto w-[134px] Gradient-H_hover transition-all duration-300 ease-in-out h-[42px] rounded-[5px] cursor-pointer hover:text-text">
            Log in
          </div>
        </Link>
      )}
    </section>
  );
}
