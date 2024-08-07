import "./App.css";
import Main from "./Componets/Main";
import { myData } from "./Data/MyData";

/*
const mainBlock = myData.map(({ name, city, position,id }) => {
  return <Main  key={id} name={name} city={city} position={position} />;
})
*/

const NewBlock = ()=>{
  return (
    <>
      {myData.map(({ name, city, position, id }) => {
        return <Main key={id} name={name} city={city} position={position} />;
      })}
    </>
  );
}

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
      {/* {mainBlock} */}

      <NewBlock />
    </>
  );
}

export default App;
