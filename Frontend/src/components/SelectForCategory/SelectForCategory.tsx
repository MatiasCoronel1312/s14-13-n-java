import carros from "../../assets/carsInfo";
import CardShowDetail from "../CardShowDetail/CardShowDetail";

const carCategory = Array.from(new Set(carros.map((car) => car.categoría)));
console.log();

const SelectForCategory = () => {
  return (
    <section className="w-[1200px] min-h-[707px] h-full bg-background  mx-auto  ml-[2px] ">
      <div className="flex items-centerd justify-betdween">
        <div className="grid grid-cols-3 grid-rows-3 w-full min-h-[1800px]  mb-8  ">
          {carCategory.map((categoría) => (
            // <p key={categoría}>{categoría}</p>
            <div className="my-6" key={categoría}>
              <CardShowDetail
                isCategory={true}
                showCars={carros.filter((car) => car.categoría === categoría)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectForCategory;
