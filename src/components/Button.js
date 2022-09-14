import React from "react";

const Button = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">
      Go somewhere
    </a>
  );
};

export default Button;
