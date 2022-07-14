// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import React, { useState, Fragment, memo, useCallback } from "react";

import { IProps } from "./interface";

// memoized component
const ChildComponent = memo(({ makeLog }: IProps) => {
  console.log("ChildComponent has been updated. Memoization is not working.");
  return (
    <button className="btn btn-info" onClick={makeLog}>
      say Hi from ChildComponent
    </button>
  );
});

export const MainComponent = () => {
  const [state, setState] = useState < boolean > false; // change state for component force updating

  const makeLog = useCallback(() => console.log("hi from MainComponent"), []); // function to make a log from MainComponent

  return (
    <Fragment>
      <button className="btn btn-info btn-lg" onClick={() => setState(!state)}>
        MainComponent force updating
      </button>
      <ChildComponent makeLog={makeLog} />
    </Fragment>
  );
};
