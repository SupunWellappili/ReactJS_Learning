import { useState } from "react";
import "./App.css";
import Main from "./Componets/Main";
import { myData } from "./Data/MyData";

const mainBlock = myData.map(({ name, city, image, position, id }) => {
  return (
    <Main key={id} name={name} image={image} city={city} position={position} />
  );
});

function App() {
  const [myVar, setMyVar] = useState("Amila");

  const clickHandle = () => {
    // myVar = "Pavan";
    setMyVar('Nisan');
    console.log(myVar); //Amila(Render Wena mohothakata pera)
  };

  return (
    <div className="main__container">
      <div>
        <h1>{myVar}</h1>
      </div>
      <p>I'm a Student.</p>
      <div className="mainBlock__container">{mainBlock}</div>
      <br />
      <br />
      <button
        style={{
          fontSize: "12px",
          border: "2px solid red",
          padding: '"7px 12px',
        }}
        //onClick={clickHandle()} //Not Use
        onClick={clickHandle}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
