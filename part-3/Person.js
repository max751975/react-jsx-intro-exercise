const Person = (props) => {
  const msg = props.age >= 18 ? "You can vote" : "You must be 18 to vote";
  let hobbies = props.hobbies.map((h) => <li>{h}</li>);
  return (
    <div>
      <p>Learn some information about the person:</p>
      <ul>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
        <ul>Hobbies: {hobbies}</ul>
      </ul>
      <h3>{msg}</h3>
    </div>
  );
};
