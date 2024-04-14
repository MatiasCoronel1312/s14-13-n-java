import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface IFormData {
  nombre: string;
  apellido: string;
  email: string;
  nacionalidad: string;
  tipoDocumento: string;
  numeroDocumento: string;
  numeroTelefono: string;
  contrasena: string;
  confirmarContrasena: string;
}

export default function Registro() {
  const navigator = useNavigate();
  const [formData, setFormData] = useState<IFormData>({
    nombre: "",
    apellido: "",
    email: "",
    nacionalidad: "",
    tipoDocumento: "dni",
    numeroDocumento: "",
    numeroTelefono: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigator("/finalizar-pago");
    console.log(formData);
  };

  return (
    <section className="my-[63px] w-[1062px] flex items-center justify-center flex-col Gradient-T rounded-2xl px-[30px] pb-[30px]">
      <h3 className=" my-[30px] text-background text-[32px]">
        Formulario de Registro
      </h3>
      <form
        className="flex flex-col items-center justify-center w-full gap-10 bg-background py-9"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 text-center">
          <p className="text-2xl ">
            Entre su información para crear una cuenta
          </p>
          <p> Los campos marcados con un asterisco (*) son obligatorios.</p>
        </div>
        <div className="flex gap-[67px]">
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="nombre">Nombre</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="apellido">Apellido</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="flex gap-[67px]">
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="nacionalidad">Nacionalidad</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="nacionalidad"
              name="nacionalidad"
              value={formData.nacionalidad}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className=" flex gap-[67px]">
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="tipoDocumento">Tipo de Documento</label>
            <select
              className="py-4 pl-6 border border-black rounded bg-background"
              id="tipoDocumento"
              name="tipoDocumento"
              value={formData.tipoDocumento}
              onChange={handleChangeDropdown}
            >
              <option value="dni">DNI</option>
              <option value="pasaporte">Pasaporte</option>
              <option value="otros">Otros</option>
            </select>
          </div>
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="numeroDocumento">Número de Documento</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="numeroDocumento"
              name="numeroDocumento"
              value={formData.numeroDocumento}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="flex gap-[67px]">
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="numeroTelefono">Número de Teléfono</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="numeroTelefono"
              name="numeroTelefono"
              value={formData.numeroTelefono}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col w-[450px] gap-2">
              <label htmlFor="contrasena">Contraseña</label>
              <input
                className="py-4 pl-6 border border-black rounded bg-background"
                id="contrasena"
                name="contrasena"
                type="password"
                value={formData.contrasena}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex flex-col w-[450px] gap-2">
              <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
              <input
                className="py-4 pl-6 border border-black rounded bg-background"
                id="confirmarContrasena"
                name="confirmarContrasena"
                type="password"
                value={formData.confirmarContrasena}
                onChange={handleChangeInput}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <p className="text-sm ">
            Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>

          <button className=" w-[252px] p-1 rounded-md bg-gradient-to-r from-[#ff8c00] to-[#b81c00]">
            <div className="flex items-center justify-center px-12 py-5 bg-background text-[#C26A00] text-xl">
              Registrarme
            </div>
          </button>
        </div>
      </form>
    </section>
  );
}
