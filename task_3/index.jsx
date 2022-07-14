// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { useState, Fragment, useMemo } from "react";

import { IProps } from "./interface";

// memoized component
const ChildComponent = ({ user: { name, age } }: IProps) => {
  return useMemo(() => {
    console.log("ChildComponent has been updated. Memoization is working now.");

    return (
      <div>
        user name: {name}, user age: {age || "unknown"}
      </div>
    );
  }, [name, age]);
};

export const MainComponent = ({
  user = { name: "unknown", age: null }, // default value for `props.user`
}: IProps) => {
  const [state, setState] = useState < boolean > false; // change state for component force updating

  return (
    <Fragment>
      <button onClick={() => setState(!state)} className="btn btn-info">
        MainComponent force updating
      </button>
      <ChildComponent user={user} />
    </Fragment>
  );
};
