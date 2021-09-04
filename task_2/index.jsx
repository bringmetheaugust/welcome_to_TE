import { useState, Fragment, memo } from 'react';

const MainComponent = () => {
    const [ _, update ] = useState(); // change state for force component rerendering and checking the result

    const makeLog = () => console.log('hi from MainComponent'); // function to make a log from MainComponent

    return (
        <Fragment>
            <button onClick={update}>update MainComponent</button>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>click me</button>
));
