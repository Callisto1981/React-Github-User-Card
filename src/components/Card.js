import React from "react";

const Card = props => {
  return (
    <div>
      <p>{props.login}</p>
      <p>{props.image}</p>
    </div>
  );
};
export default Card;
