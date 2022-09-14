import React from "react";

const CardImage = ({ img, title }) => {
  return <img src={img} className="card-img-top" alt={title} />;
};

export default CardImage;
