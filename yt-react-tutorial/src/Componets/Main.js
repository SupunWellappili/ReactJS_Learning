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
      {props.children}
    </div>
  );
}

export default Main;
