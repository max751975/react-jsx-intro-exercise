const App = () => {
  return (
    <div>
      <Tweet
        name="Pascal"
        username="pascalcat"
        date={new Date().toDateString()}
        message="I love chicken"
      />
      <Tweet
        name="Max"
        username="max22222"
        date={new Date().toDateString()}
        message="need some vacation"
      />
      <Tweet
        name="Victoria"
        username="vika2016"
        date={new Date().toDateString()}
        message="I love milk"
      />
    </div>
  );
};
