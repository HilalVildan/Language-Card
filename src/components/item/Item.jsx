import React, { useState } from "react";
import "./Item.css"

const Item = ({ data }) => {
  const [logo, setLogo] = useState(true);
  return (
    <div className="container container-item" onClick={() => setLogo(!logo)}>
      {logo ? (
        <div className="cards">
          <img className="card-logo" src={data.img} alt="logo" />
          <h3 className="card-title">{data.name}</h3>
        </div>
      ) : (
        <ul className="list">
          {data.options.map((option, index) => {
            return <li className="text" key={index}>{option}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
