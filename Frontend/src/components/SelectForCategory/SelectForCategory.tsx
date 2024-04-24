import { useEffect, useState } from "react";
import { TCarro } from "../../assets/carsInfo";
import CardShowDetail from "../CardShowDetail/CardShowDetail";
import axios from "axios";

const SelectForCategory = () => {
  const [carrosInfo, setCarrosInfo] = useState<TCarro[]>([]);
  const [carrosCategory, setCarrosCategory] = useState<string[]>([]);
  useEffect(() => {
    axios
      .get<TCarro[]>("https://gocarapp.onrender.com/api/vehicles/all")
      .then((res) => {
        const carCategory = Array.from(
          new Set(res.data.map((car) => car.category))
        );

        setCarrosCategory(carCategory);
        setCarrosInfo(res.data);
      });
  }, []);

  return (
<<<<<<< HEAD
    <div className="w-full h-full flex flex-wrap bg-background justify-center gap-x-7 gap-y-7 pb-7 ">
=======
    <section className="w-[1200px] min-h-[707px] h-full bg-background  mx-auto  ml-[2px] ">
      <div className="flex items-centerd justify-betdween">
        <div className="grid grid-cols-3 grid-rows-2 w-full h-[1200px]  mb-8  ">
>>>>>>> cb3f2ba (add id insurance to redux)
          {carrosCategory.map((categoría) => (
            // <p key={categoría}>{categoría}</p>
            <div className="" key={categoría}>
              <CardShowDetail
                isCategory={true}
                showCars={carrosInfo.filter(
                  (car) => car.category === categoría
                )}
              />
            </div>
          ))}
    </div>
  );
};

export default SelectForCategory;
