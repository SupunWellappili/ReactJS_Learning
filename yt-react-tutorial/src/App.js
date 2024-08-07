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

  let myVar ="Nimal"
  
  const clickHandle = () => {
    myVar = "Pavan";
    console.log(myVar);
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
