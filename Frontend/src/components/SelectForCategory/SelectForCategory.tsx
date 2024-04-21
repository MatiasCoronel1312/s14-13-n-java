import { useEffect, useState } from "react";
import { TCarro } from "../../assets/carsInfo";
import CardShowDetail from "../CardShowDetail/CardShowDetail";
import axios from "axios";

// const carCategory = Array.from(new Set(carros.map((car) => car.categoría)));
// console.log(carCategory);

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
    <section className="w-[1200px] min-h-[707px] h-full bg-background  mx-auto  ml-[2px] ">
      <div className="flex items-centerd justify-betdween">
        <div className="grid grid-cols-3 grid-rows-3 w-full min-h-[1800px]  mb-8  ">
          {carrosCategory.map((categoría) => (
            // <p key={categoría}>{categoría}</p>
            <div className="my-6" key={categoría}>
              <CardShowDetail
                isCategory={true}
                showCars={carrosInfo.filter(
                  (car) => car.category === categoría
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectForCategory;
