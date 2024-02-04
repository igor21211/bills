import React, { useState } from "react";
import Button from "../Button/Button";

const FormAddFriend = ({ add }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleAddFriends = (e) => {
    e.preventDefault();
    const friend = { id: new Date(), name, image, balance: 0 };
    add(friend);
    setName("");
    setImage("");
  };

  return (
    <form className="form-add-friend">
      <label>🙋‍♂️ Friend Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <label>🏞 Image URL</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />
      <Button className="button" onClick={(e) => handleAddFriends(e)}>
        Add
      </Button>
    </form>
  );
};

export default FormAddFriend;
