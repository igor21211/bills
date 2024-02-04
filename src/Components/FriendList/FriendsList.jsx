import React from "react";
import Friend from "../Friend/Friend";

const FriendsList = ({ list, get, close, friend }) => {
  return (
    <ul>
      {list.map((el) => (
        <Friend friend={friend} close={close} get={get} key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default FriendsList;
