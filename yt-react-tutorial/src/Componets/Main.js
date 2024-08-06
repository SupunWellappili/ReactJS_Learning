const name = 'Supun Wellapili';
const position = 'Web Developer';
const city ="Galle";

const myObj = {
    name :`${name}`,
    position :`${position}`
}

function Main(props) {

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
      {props.children}
     
    </div>
  );
}

export default Main;
