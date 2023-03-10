import React from "react";

const Card = ({ validInfo }) => {
  const { nombre, email } = validInfo.infoUser;

  return (
    <div
      style={{
        height: "239px",
        border: "2px solid white",
        maxWidth: "368px",
        margin: "5px",
        padding: "5px",
        textAlign: "center",
        backgroundColor: "steelblue",
      }}
    >
      <h2>Hola {nombre}!!</h2>
      <h3>puedes tener una Licencia de conducir !!</h3>
      <h4>Confirma el email enviado a {email}</h4>
    </div>
  );
};

export default Card;
