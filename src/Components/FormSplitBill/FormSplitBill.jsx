import React, { useState } from "react";
import Button from "../Button/Button";

const FormSplitBill = ({ friend, addMoney, decMoney }) => {
  const { id, name } = friend;

  const [bill, setBill] = useState(undefined);
  const [expense, setExpense] = useState(undefined);
  const [whopay, setWhopay] = useState("You");
  const splitBill = (e) => {
    e.preventDefault();
    if (whopay === "You") {
      addMoney(id, bill - expense);
    }
    if (whopay === name) {
      decMoney(id, expense);
    }
  };

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label>💵 Bill value</label>
      <input
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        type="number"
      />
      <label>🗿 Your expense</label>
      <input
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        type="number"
      />
      <label>🤠 {name} expense</label>
      <input value={expense ? bill - expense : bill} disabled type="number" />
      <label>🤑 Who is paying the bill</label>
      <select value={whopay} onChange={(e) => setWhopay(e.target.value)}>
        <option value="You">You</option>
        <option value={name}>{name}</option>
      </select>
      <Button onClick={(e) => splitBill(e)} className="button">
        Split Bill
      </Button>
    </form>
  );
};

export default FormSplitBill;
