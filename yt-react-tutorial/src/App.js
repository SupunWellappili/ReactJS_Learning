import "./App.css";
import Main from "./Componets/Main";

const myData = [
  {
    id : "A-001",
    name: "Nipuna",
    city: "Padukka",
    position: "Electrial",
  },
  {
    id : "A-002",
    name: "Hasanthi",
    city: "Buttala",
    position: "Banker",
  },
  {
    id : "A-003",
    name: "Malanie",
    city: "Dickwella",
    position: "Retire",
  },
  {
    id : "A-004",
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
      {myData.map(({ name, city, position,id }) => {
        return <Main  key={id} name={name} city={city} position={position} />;
      })}
    </>
  );
}

export default App;
