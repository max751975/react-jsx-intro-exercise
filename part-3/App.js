const App = () => {
  return (
    <div>
      <Person
        name="John"
        age={28}
        hobbies={["fishing", "hunting", "camping"]}
      />
      <Person
        name="Mike"
        age={17}
        hobbies={["skateboarding", "music", "reading"]}
      />
      <Person name="Peter" age={48} hobbies={["wiskey", "rum", "cognac"]} />
    </div>
  );
};
