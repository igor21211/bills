import { useState } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import FriendsList from "./Components/FriendList/FriendsList";
import FormAddFriend from "./Components/FormAddFriend/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [active, setActive] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectFriend, setSelectFriend] = useState(null);
  const toogleModelAddForm = () => {
    setActive(!active);
  };

  const addToFriend = (friend) => {
    setFriends([...friends, friend]);
  };

  const decreaseBalance = (id, money) => {
    const newArr = friends.map((friend) => {
      if (friend.id === id) {
        return { ...friend, balance: friend.balance - money };
      }
      return friend;
    });
    setFriends(newArr);
  };
  const inecreaseBalance = (id, money) => {
    const newArr = friends.map((friend) => {
      if (friend.id === id) {
        return { ...friend, balance: friend.balance + money };
      }
      return friend;
    });
    setFriends(newArr);
  };

  const handleSelectedFriends = (friend) => {
    setSelectFriend((selected) => (selected?.id === friend.id ? null : friend));
    setActive(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          oNSelected={handleSelectedFriends}
          list={friends}
          selected={selectFriend}
        />
        {active && <FormAddFriend add={addToFriend} />}
        <Button onClick={toogleModelAddForm}>
          {active ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectFriend && (
        <FormSplitBill
          addMoney={inecreaseBalance}
          decMoney={decreaseBalance}
          friend={selectFriend}
        />
      )}
    </div>
  );
}

export default App;
