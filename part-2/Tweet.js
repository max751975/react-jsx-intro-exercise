const Tweet = (props) => {
  return (
    <div>
      <span>
        <b>Username:</b> {props.username},&nbsp;
      </span>
      <span>
        <b>Name:</b> {props.name},&nbsp;
      </span>
      <span>{props.date}</span>
      <p>{props.message}</p>
      <hr />
    </div>
  );
};
