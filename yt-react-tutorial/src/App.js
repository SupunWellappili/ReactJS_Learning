import "./App.css";
import Main from "./Componets/Main";

const myData = [
  {
    name: "Nipuna",
    city: "Padukka",
    position: "Electrial",
  },
  {
    name: "Hasanthi",
    city: "Buttala",
    position: "Banker",
  },
  {
    name: "Malanie",
    city: "Dickwella",
    position: "Retire",
  },
  {
    name: "Wije",
    city: "Beliatta",
    position: "GS",
  },
];

function App() {
  return (
    <>
      <div>
        <h1>Supun Wellappili.</h1>
      </div>
      <Main>
        <h5>Supunzzzzz</h5>
        <p>I'm a children</p>
      </Main>
      {/* Object Array (MAP) */}
      {/* {
        myData.map((ele=>{
          return <Main name={ele.name} city={ele.city} position={ele.position}/>
        }))

     } */}
      {/* //Object Destruction */}
      {myData.map(({ name, city, position },index) => {
        return <Main key={index} name={name} city={city} position={position} />;
      })}
    </>
  );
}

export default App;
