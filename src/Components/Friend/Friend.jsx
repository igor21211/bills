import React, { useState } from "react";
import Button from "../Button/Button";

const Friend = ({ id, name, image, balance, get, close, friend }) => {
  const [selected, setSelected] = useState(friend);

  const handleSelect = (id) => {
    get(id);
    setSelected(!selected);
    if (selected) {
      close();
    }
  };

  return (
    <li className={`${selected && "selected"}`}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {name} {balance}₴
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you {balance}₴
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      <Button onClick={() => handleSelect(id)} className="button">
        {selected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
