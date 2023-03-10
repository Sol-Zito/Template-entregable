import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [infoUser, setInfoUser] = useState({
    nombre: "",
    email: "",
    edad: 0,
  });

  const data = {
    infoUser,
    setInfoUser,
  };

  return (
    <div className="App-header">
      <h1>Licencia de conducir</h1>
      <Form infoData={data} />
    </div>
  );
}

export default App;
