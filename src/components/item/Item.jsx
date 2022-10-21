import React, { useState } from "react";

const Item = ({ data }) => {
  const [logo, setLogo] = useState(true);
  return (
    <div className="container" onClick={() => setLogo(!logo)}>
      {logo ? (
        <div>
          <img className="card-logo" src={data.img} alt="logo" />
          <h3 className="card-title">{data.name}</h3>
        </div>
      ) : (
        <ul className="list">
          {data.options.map((option, index) => {
            return <li key={index}>{option}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
