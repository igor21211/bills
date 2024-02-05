import Button from "../Button/Button";

const Friend = ({ id, name, image, balance, oNSelected, selected }) => {
  const isSelected = selected?.id === id;

  return (
    <li className={`${isSelected && "selected"}`}>
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
      <Button
        onClick={() => oNSelected({ id, name, image, balance })}
        className="button"
      >
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
