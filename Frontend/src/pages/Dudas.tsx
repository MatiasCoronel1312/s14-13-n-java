import { useCollapse } from "react-collapsed";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

type Duda = { id: number; question: string; answer: string };

const dudas: Duda[] = [
  {
    id: 1,
    question: "¿Cómo puedo reservar un auto?",
    answer:
      "Puedes reservar un auto a través de la app GoCar, nuestro sitio web o llamando a nuestro centro de atención al cliente.",
  },
  {
    id: 2,
    question: "¿Qué necesito para alquilar un auto?",
    answer:
      "Puedes reservar un auto a través de la app GoCar, nuestro sitio web o llamando a nuestro centro de atención al cliente.",
  },
  {
    id: 3,
    question: "¿Cómo puedo reservar un auto?",
    answer:
      "Puedes reservar un auto a través de la app GoCar, nuestro sitio web o llamando a nuestro centro de atención al cliente.",
  },
  {
    id: 4,
    question: "¿Cómo puedo reservar un auto?",
    answer:
      "Puedes reservar un auto a través de la app GoCar, nuestro sitio web o llamando a nuestro centro de atención al cliente.",
  },
];

interface Props {
  question: string;
  answer: string;
}

const Question = ({ question, answer }: Props) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="flex flex-col pb-4">
      {isExpanded ? (
        <div
          className="bg-[#FADEBD] hover:bg-[#F9D8B2] flex justify-between cursor-pointer w-full text-center text-lg p-[18px]"
          {...getToggleProps()}
        >
          <p>{question}</p>
          <FaAngleUp className="w-[20px] h-[20px]" />
        </div>
      ) : (
        <div
          className="bg-[#FADEBD] hover:bg-[#F9D8B2] flex justify-between cursor-pointer w-full text-center text-lg p-[18px] rounded-br-lg shadow-lg"
          {...getToggleProps()}
        >
          <p>{question}</p>
          <FaAngleDown className="w-[20px] h-[20px]" />
        </div>
      )}
      <div {...getCollapseProps()}>
        <div className="p-[18px] bg-[#F5F5F5] rounded-br-lg shadow-lg">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Dudas = () => {
  return (
    <div className="w-full h-full bg-background flex justify-center">
      <div className=" lg:w-[85%] md:w-[90%] h-full">
        <div className="w-full h-full rounded Gradient-H my-8 pb-3">
          <h1 className="text-[#F5F5F5] text-center text-xl py-2">
            Dudas / Faq
          </h1>
          <div className="bg-[#F5F5F5] mx-3 p-4">
            <h2 className="text-center text-2xl py-3">Preguntas Frecuentes</h2>
            <p className="py-2">Reserva y alquiler:</p>
            <Question question={dudas[0].question} answer={dudas[0].answer} />
            <Question question={dudas[1].question} answer={dudas[1].answer} />
            <p className="py-2">Precios y Tarifas:</p>
            <Question question={dudas[2].question} answer={dudas[2].answer} />
            <Question question={dudas[3].question} answer={dudas[3].answer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dudas;
