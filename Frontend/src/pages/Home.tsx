import { FaUserLarge } from "react-icons/fa6"
import TurismoHome from "../components/turismo/TurismoHome"

const Home = () => {
  return (
    <div>
      <p className="text-3xl font-bold underline bg-red-200">hola mundo desde home 
      <FaUserLarge/>
      </p>
      <TurismoHome />
    </div>
  )
}

export default Home
