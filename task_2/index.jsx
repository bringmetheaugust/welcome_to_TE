import { Fragment, memo, useCallback } from 'react';

const MainComponent = () => {
    const makeLog = () => console.log('hi from MainComponent'); // function to make logs from MainComponent
    const makeMemoizedLog = useCallback(() => makeLog(), []);

    return (
        <Fragment>
            <ChildComponent makeLog={makeMemoizedLog} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
    <button onClick={makeLog}>say Hi from ChildComponent</button>
));
