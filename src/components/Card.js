import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
//create the component

// parameter destructuring syntax
const Card = ({ title, img, text, url }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage img={img} title={title} />
      <CardBody title={title} text={text} url={url} />
    </div>
  );
};

//export the component
export default Card;
