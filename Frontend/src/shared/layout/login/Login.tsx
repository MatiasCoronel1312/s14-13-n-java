import { useState } from "react";
import { Link } from "react-router-dom";

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    onLogin(email, password);
  };

  return (
    <form
      className=" my-[63px] w-[1062px] flex items-center justify-center flex-col Gradient-T rounded-2xl px-[30px] pb-[30px]"
      onSubmit={handleSubmit}
    >
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <h3 className=" my-[30px]">Inicio de sesión</h3>
      <div className="flex flex-col items-center justify-center w-full gap-10 bg-background py-9">
        <div className="flex flex-col w-[450px] gap-2">
          <label className="text-sm font-bold uppercase" htmlFor="email">
            Email
          </label>
          <input
            className="py-4 pl-6 border border-black rounded bg-background"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@example.com"
            required
          />
        </div>
        <div className="flex flex-col w-[450px] gap-2">
          <label className="text-sm font-bold uppercase" htmlFor="password">
            Contraseña
          </label>
          <input
            className="py-4 pl-6 border border-black rounded bg-background"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <p>Olvidaste tu contraseña?</p>
        </div>
        <p>
          Aun no tienes una cuenta? <Link to="/registro">Registrarme</Link>
        </p>
        <button
          className="px-12 py-5 rounded-lg Gradient-T text-background"
          type="submit"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};
