import { Fragment, memo } from 'react';

const isPropsEqual = (prevProps, nextProps) => {
    if (
      prevProps.user.name === nextProps.user.name ||
      prevProps.user.age === nextProps.user.age
    ) {
      return true;
    }
  
    return false;
  };

const MainComponent = ({
    user = { name: 'unknown', age: null } // default value for `props.user`
}) => {
    return (
        <Fragment>
            <ChildComponent user={user} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    )
}, isPropsEqual);
