import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiUrl from "../env/environment.prod";

const apiBase = apiUrl;

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
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IFormData>({
    nombre: "",
    apellido: "",
    email: "",
    nacionalidad: "",
    tipoDocumento: "DNI",
    numeroDocumento: "",
    numeroTelefono: "",
    contrasena: "",
    confirmarContrasena: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<IFormData>>({});

  const validateForm = () => {
    const errors: Partial<IFormData> = {};
    if (!formData.nombre.trim()) {
      errors.nombre = "Nombre es requerido";
    }
    if (!formData.apellido.trim()) {
      errors.apellido = "Apellido es requerido";
    }
    if (!formData.email.trim()) {
      errors.email = "Email es requerido";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Ingrese un email válido";
    }
    if (!formData.nacionalidad.trim()) {
      errors.nacionalidad = "Nacionalidad es requerida";
    }
    if (!formData.numeroDocumento.trim()) {
      errors.numeroDocumento = "Número de Documento es requerido";
    }
    if (!formData.numeroTelefono.trim()) {
      errors.numeroTelefono = "Número de Teléfono es requerido";
    } else if (!/^\d+$/.test(formData.numeroTelefono)) {
      errors.numeroTelefono = "Ingrese solo números";
    }
    if (!formData.contrasena.trim()) {
      errors.contrasena = "Contraseña es requerida";
    } else if (formData.contrasena.length < 6) {
      errors.contrasena = "La contraseña debe tener al menos 6 caracteres";
    }
    if (formData.contrasena !== formData.confirmarContrasena) {
      errors.confirmarContrasena = "Las contraseñas no coinciden";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch(`${apiBase}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.contrasena,
            name: formData.nombre,
            lastName: formData.apellido,
            identification: formData.tipoDocumento,
            identificationNumber: formData.numeroDocumento,
            country: formData.nacionalidad,
            phoneNumber: formData.numeroTelefono,
          }),
        });

        const responseData = await response.json();

        if (response.ok) {
          console.log("Registro exitoso, token:", responseData.token);
          navigate("/");
        } else {
          console.error("Error al registrar:", responseData.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            <label htmlFor="nombre">Nombre *</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChangeInput}
            />
            {formErrors.nombre && (
              <span className="text-red-500">{formErrors.nombre}</span>
            )}
          </div>
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="apellido">Apellido *</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChangeInput}
            />
            {formErrors.apellido && (
              <span className="text-red-500">{formErrors.apellido}</span>
            )}
          </div>
        </div>
        <div className="flex gap-[67px]">
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="email">Email *</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChangeInput}
            />
            {formErrors.email && (
              <span className="text-red-500">{formErrors.email}</span>
            )}
          </div>
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="nacionalidad">Nacionalidad *</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="nacionalidad"
              name="nacionalidad"
              value={formData.nacionalidad}
              onChange={handleChangeInput}
            />
            {formErrors.nacionalidad && (
              <span className="text-red-500">{formErrors.nacionalidad}</span>
            )}
          </div>
        </div>
        <div className=" flex gap-[67px]">
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="tipoDocumento">Tipo de Documento *</label>
            <select
              className="py-4 pl-6 border border-black rounded bg-background"
              id="tipoDocumento"
              name="tipoDocumento"
              value={formData.tipoDocumento}
              onChange={handleChangeDropdown}
            >
              <option value="DNI">DNI</option>
              <option value="PASSPORT">Pasaporte</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="numeroDocumento">Número de Documento *</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="numeroDocumento"
              name="numeroDocumento"
              value={formData.numeroDocumento}
              onChange={handleChangeInput}
            />
            {formErrors.numeroDocumento && (
              <span className="text-red-500">{formErrors.numeroDocumento}</span>
            )}
          </div>
        </div>
        <div className="flex gap-[67px]">
          <div className="flex flex-col w-[450px] gap-2">
            <label htmlFor="numeroTelefono">Número de Teléfono *</label>
            <input
              className="py-4 pl-6 border border-black rounded bg-background"
              id="numeroTelefono"
              name="numeroTelefono"
              value={formData.numeroTelefono}
              onChange={handleChangeInput}
            />
            {formErrors.numeroTelefono && (
              <span className="text-red-500">{formErrors.numeroTelefono}</span>
            )}
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col w-[450px] gap-2">
              <label htmlFor="contrasena">Contraseña *</label>
              <input
                className="py-4 pl-6 border border-black rounded bg-background"
                id="contrasena"
                name="contrasena"
                type="password"
                value={formData.contrasena}
                onChange={handleChangeInput}
              />
              {formErrors.contrasena && (
                <span className="text-red-500">{formErrors.contrasena}</span>
              )}
            </div>
            <div className="flex flex-col w-[450px] gap-2">
              <label htmlFor="confirmarContrasena">
                Confirmar Contraseña *
              </label>
              <input
                className="py-4 pl-6 border border-black rounded bg-background"
                id="confirmarContrasena"
                name="confirmarContrasena"
                type="password"
                value={formData.confirmarContrasena}
                onChange={handleChangeInput}
              />
              {formErrors.confirmarContrasena && (
                <span className="text-red-500">
                  {formErrors.confirmarContrasena}
                </span>
              )}
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
