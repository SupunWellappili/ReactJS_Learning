import { Fragment } from "react";

// function Main(props) {
function Main({ name, city, position }) {
  return (
    <Fragment>
        <div>--------------------------------------------</div>
      <img
        alt="Laptop picture"
        src="https://ssl.robocup.org/wp-content/uploads/2021/12/20160629-IMG_0283_1.jpg"
      />
      <div>
        <h3>{name}</h3>
        <p>
          <span>{city}</span>
          <span>{position}</span>
        </p>
      </div>
    </Fragment>
  );
}

export default Main;
