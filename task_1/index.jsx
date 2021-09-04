import { useState, Fragment } from 'react';

const MainComponent = () => {
    const [ _, update ] = useState(); // change state for force component rerendering and checking the result

    return (
        <Fragment>
            <button onCLick={update}>update MainComponent</button>
            <ChildComponent name={'Slim shady'} />
        </Fragment>
    );
};

const ChildComponent = ({ name }) => (
    <div>my name is {name}</div>
);
