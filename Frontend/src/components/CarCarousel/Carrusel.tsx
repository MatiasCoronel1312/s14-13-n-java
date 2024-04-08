import { useEffect, useState } from "react";
import Car from "./carrusel.interface";
import { useNavigate } from "react-router-dom";
export default function Carrusel() {
  const navigator = useNavigate();
  const images: Car[] = [
    {
      image: "src/assets/ImagenesCarros/AudiA5.png",
      title: "Audi A5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "src/assets/ImagenesCarros/NissanVersa.png",
      title: "Nissan Versa",
      description:
        "Nunc accumsan, nisl id facilisis hendrerit, neque augue ultricies.",
    },
    {
      image: "src/assets/ImagenesCarros/ToyotaCorolla.png",
      title: "Toyota Corolla",
      description:
        "Duis eget eros aliquam, ultricies leo a, aliquam erat volutpat.",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(1);
  const sliceIzquierda =
    images[selectedIndex < 1 ? images.length - 1 : selectedIndex - 1];
  const slicePrincipal = images[selectedIndex];
  const sliceDerecha =
    images[selectedIndex < images.length - 1 ? selectedIndex + 1 : 0];
  const previus = () => {
    if (selectedIndex <= 0) {
      setSelectedIndex(images.length - 1);
    } else {
      setSelectedIndex((state) => state - 1);
    }
  };
  const next = () => {
    if (selectedIndex < images.length - 1) {
      setSelectedIndex((state) => state + 1);
    } else {
      setSelectedIndex(0);
    }
  };

  // Nueva función para el autoplay
  const [isAutoplay, setIsAutoplay] = useState(true); // Estate para activar/desactivar autoplay
  const autoplayInterval = 2000; // Tiempo entre cambios de imagen (en milisegundos)

  useEffect(() => {
    let autoplayId: number;

    if (isAutoplay) {
      autoplayId = setInterval(() => {
        next();
      }, autoplayInterval);
    }

    return () => clearInterval(autoplayId); // Limpiar el intervalo al desmontar el componente
  }, [isAutoplay, next]); // Dependencias del useEffect: isAutoplay y next

  return (
    <>
      <section className="h-full lg:w-[85%] md:w-[90%]">
        <div className="mb-8">
          <h1 className="text-center font-sans font-bold text-text text-2xl">
            Conocé nuestra flota
          </h1>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-row align-bottom">
            <div className="flex flex-shrink-0 flex-col self-center">
              <img
                className="w-[297.44px] h-[202.91px] justify-center "
                src={sliceIzquierda.image}
                alt="image"
              />
              <h2 className="font-sans text-3xl text-center max-w-72">
                {sliceIzquierda.title}
              </h2>
              <p className="font-sans text-center max-w-72 ">
                {sliceIzquierda.description}
              </p>
            </div>
            <button onClick={previus}>
              <svg
                className="rotate-180"
                width="36"
                height="50"
                viewBox="0 0 36 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.2977 27.2964L10.9227 48.264C9.30703 49.7133 6.69453 49.7133 5.09609 48.264L1.21172 44.7797C-0.403906 43.3305 -0.403906 40.987 1.21172 39.5532L17.7805 24.6909L1.21172 9.82857C-0.403906 8.37933 -0.403906 6.0359 1.21172 4.60208L5.07891 1.08692C6.69453 -0.362308 9.30703 -0.362308 10.9055 1.08692L34.2805 22.0545C35.9133 23.5038 35.9133 25.8472 34.2977 27.2964Z"
                  fill="#707070"
                />
              </svg>
            </button>
            <div className="flex-shrink-0 flex flex-col align-middle justify-between">
              <img
                className="w-[445px] h-[220px] justify-center object-cover"
                src={slicePrincipal.image}
                alt="image"
              />
              <h2 className="font-sans text-3xl text-center max-w-[445px] object-cover">
                {slicePrincipal.title}
              </h2>
              <p className="font-sans text-center max-w-[445px] max-h-[31.05px] object-cover">
                {slicePrincipal.description}
              </p>
            </div>
            <button onClick={next}>
              <svg
                width="36"
                height="50"
                viewBox="0 0 36 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.2977 27.2964L10.9227 48.264C9.30703 49.7133 6.69453 49.7133 5.09609 48.264L1.21172 44.7797C-0.403906 43.3305 -0.403906 40.987 1.21172 39.5532L17.7805 24.6909L1.21172 9.82857C-0.403906 8.37933 -0.403906 6.0359 1.21172 4.60208L5.07891 1.08692C6.69453 -0.362308 9.30703 -0.362308 10.9055 1.08692L34.2805 22.0545C35.9133 23.5038 35.9133 25.8472 34.2977 27.2964Z"
                  fill="#707070"
                />
              </svg>
            </button>
            <div className="flex flex-shrink-0 flex-col self-center">
              <img
                className="w-[297.44px] h-[202.91px] justify-center "
                src={sliceDerecha.image}
                alt="image"
              />
              <h2 className="font-sans text-3xl text-center max-w-72">
                {sliceDerecha.title}
              </h2>
              <p className="font-sans text-center max-w-72">
                {sliceDerecha.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-bottom">
          <button
          onClick={()=>{navigator('/categoriasDeVehiculos')}}
            type="button"
            className="border-orange-600 border-2 text-orange-600 py-4 px-10 rounded-md mt-8"
          >
            Mirá todos los Autos
          </button>
        </div>
      </section>
    </>
  );
}
