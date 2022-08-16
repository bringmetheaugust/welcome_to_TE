// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import React, { useState, useCallback, Fragment, memo } from "react";

import { IProps } from "./interface";

// memoized component
const ChildComponent = memo(({ makeLog }) => {
  console.log("ChildComponent has been updated. Memoization is not working.");

  return (
    <button className="btn btn-info" onClick={makeLog}>
      say Hi from ChildComponent
    </button>
  );
});

export const App = () => {
  const [state, setState] = useState < boolean > false; // change state for component force updating

  // const makeLog = () => console.log("hi from MainComponent"); // function to make a log from MainComponent
  const makeLog = useCallback(() => console.log("hi from AppComponent"), []);

  return (
    <Fragment>
      <button className="btn btn-info btn-lg" onClick={() => setState(!state)}>
        App force updating
      </button>
      <ChildComponent makeLog={makeLog} />
    </Fragment>
  );
};
