import { Fragment } from "react";
import "./App.css";
import Main from "./Componets/Main";
import { myData } from "./Data/MyData";

const mainBlock = myData.map(({ name, city, position, id }) => {
  return <Main key={id} name={name} city={city} position={position} />;
});

function App() {
  return (
    <Fragment>
      <div>
        <h1>Supun Wellappili.</h1>
      </div>
      <p>I'm a Student.</p>
      <div className="mainBlock_container">{mainBlock}</div>
    </Fragment>
  );
}

export default App;
