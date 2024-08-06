const name = "Supun Wellapili";
const position = "Web Developer";

const myObj = {
  // create object
  name: `${name}`,
  position: `${position}`,
  city : "Galle",
};

function Main(props) {

  const { city } = myObj; //Object Destructing

  return (
    <div>
      This is main component
      <ul>
        <li>Java</li>
        <li>C+</li>
        <li>C#</li>
        <li>Python</li>
      </ul>
      <div>{name}</div>
      <div>{myObj.position}</div>
      <div>{position}</div>
      <div>{city}</div>
      <div>--------------------------------------------</div>
      {props.children}
    </div>
  );
}

export default Main;
