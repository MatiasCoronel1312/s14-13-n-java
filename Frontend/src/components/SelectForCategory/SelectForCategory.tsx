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
    <section className=" max-w-[1200px] min-h-[707px] h-full bg-background  mx-auto  ml-[2px] ">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center w-screen max-w-[1200px]  h-[3500px] sm:h-[1740px] md:h-[1200px]  auto-rows-auto  mb-8   ">
        {carrosCategory.map((categoría) => (
          <div className="my-6 ml-6 sm:ml-0 " key={categoría}>
            <CardShowDetail
              isCategory={true}
              showCars={carrosInfo.filter((car) => car.category === categoría)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectForCategory;
