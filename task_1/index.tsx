import React, { PureComponent, Component } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

const isPropsEqual = (prevProps: IProps, nextProps: IProps) => {
    if (
        prevProps.user.name === nextProps.user.name ||
        prevProps.user.age === nextProps.user.age
    ) {
        return true;
    }

    return false;
};

// functional component
const FirstFunctionalComponent = ({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

const FirstComponent = React.memo(FirstFunctionalComponent);


// functional component
const SecondFunctionalComponent = ({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

const SecondComponent = React.memo(SecondFunctionalComponent, isPropsEqual);


// class component
class ThirdComponent extends PureComponent<IUser> {
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// class component
class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(nextProps: IProps, nextState: IProps) {
        if (
          this.props.user.name === nextProps.user.name ||
          this.props.user.age === nextProps.user.age
        ) {
          return false;
        }
        return true;
      }

    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}
