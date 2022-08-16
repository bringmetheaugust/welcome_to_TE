import { Fragment, memo, useMemo, useState } from "react";

const App = ({
  user = { name: "unknown", age: null }, // default value for `props.user`
}) => {
  const [i, setI] = useState(1);
  // console.log(user);
  const memoizedUser = useMemo(() => user, []);
  return (
    <Fragment>
      <p>{i}</p>
      <ChildComponent user={memoizedUser} />
      <button onClick={() => setI(i + 1)}>+</button>
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
  console.log("run");

  return (
    <div>
      user name: {name}, user age: {age}
    </div>
  );
});

export default App;
