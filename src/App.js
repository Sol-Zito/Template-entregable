import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [infoUser, setInfoUser] = useState({
    nombre: "",
    apellido: "",
  });

  const [isLogged, setIsLogged] = useState(false);

  const handleChange = (e) => {
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });
    console.log(infoUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLogged(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese nombre"
          name="nombre"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Ingrese apellido"
          name="apellido"
          onChange={(e) => handleChange(e)}
        />
        <button className="btnSubmit" type="submit">
          Enviar
        </button>
      </form>
      {isLogged && <Card data={infoUser} />}
    </div>
  );
}

export default App;
