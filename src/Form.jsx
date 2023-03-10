import React, { useState } from "react";
import Card from "./Card";

const Form = ({ infoData }) => {
  const { infoUser, setInfoUser } = infoData;

  const [isLogged, setIsLogged] = useState(false);

  const [error, setError] = useState({
    isActive: false,
    errorMessage: "",
    input: "",
  });

  const handleChange = (e) => {
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    if (email.includes("@") && email.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidNombre = infoUser.nombre.trim().length > 2;
    const validEmail = isValidEmail(infoUser.email);
    const isValidEdad = infoUser.edad > 17;

    if (!isValidNombre || !validEmail || !isValidEdad) {
        setError({
            ...error,
            isActive: true,
            errorMessage: "Por favor chequea que los datos sean correctos",
            input: "email, nombre",
        });
      if (isValidNombre && !validEmail && isValidEdad) {
        setError({
            ...error,
            isActive: true,
            errorMessage: "Por favor chequea que el email sea correcto",
            input: "email",
          });
      }
      if (!isValidNombre && validEmail && isValidEdad) {
        setError({
            ...error,
            isActive: true,
            errorMessage: "Por favor chequea que el nombre sea correcto",
            input: "nombre",
          });
      }
      if (isValidNombre && validEmail && !isValidEdad) {
        setError({
            ...error,
            isActive: true,
            errorMessage: "Debes ser mayor de edad para sacar la licencia",
            input: "edad",
          });
      }
    } else {
        setError({
            ...error,
            isActive: false,
          });
      setIsLogged(true);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese nombre"
          name="nombre"
          onChange={(e) => handleChange(e)}
        />
        {error.isActive && error.input.includes("nombre") && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {error.errorMessage}
          </span>
        )}
        <input
          type="text"
          placeholder="Ingrese email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        {error.isActive && error.input.includes("email") && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {error.errorMessage}
          </span>
        )}
        <input
          type="number"
          placeholder="Ingrese edad"
          name="edad"
          onChange={(e) => handleChange(e)}
        />
        {error.isActive && error.input.includes("edad") && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {error.errorMessage}
          </span>
        )}
        <button className="btnSubmit" type="submit">
          Enviar
        </button>
      </form>
      {isLogged && <Card validInfo={infoData} />}
    </div>
  );
};

export default Form;
