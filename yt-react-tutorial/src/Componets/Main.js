import { Fragment } from "react";

// function Main(props) {
function Main({ name, city, image, position }) {
  return (
    <div>
      <img
        alt="Laptop picture"
        //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIoXs7lFE--k4gQuVXuK6Re7C7xslvf-NhNg&usqp=CAU"
        src={image ? `${image}` : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIoXs7lFE--k4gQuVXuK6Re7C7xslvf-NhNg&usqp=CAU`}
      />
      <div className="mainBlock__details">
        <h3>{name}</h3>
        <p>
          <span>{city}</span>
          <span>{position}</span>
        </p>
      </div>
    </div>
  );
}

export default Main;
