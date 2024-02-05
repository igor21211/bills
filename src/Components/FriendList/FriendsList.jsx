import React from "react";
import Friend from "../Friend/Friend";

const FriendsList = ({ list, oNSelected, close, selected }) => {
  return (
    <ul>
      {list.map((el) => (
        <Friend
          selected={selected}
          close={close}
          oNSelected={oNSelected}
          key={el.id}
          {...el}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
