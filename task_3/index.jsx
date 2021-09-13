import { useState, Fragment, memo } from 'react';

const MainComponent = ({
    user = { name: 'unknown', age: null } // default value for `props.user`
}) => {
    const [ _, updateComponent ] = useState(); // change state for force component updating

    return (
        <Fragment>
            <button onClick={updateComponent}>update MainComponent</button>
            <ChildComponent user={user} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    );
});
