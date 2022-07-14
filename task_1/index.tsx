import { React, Component, memo, useMemo, PureComponent } from "react";

type IUser = {
  name: string;
  age: number;
};

type IProps = {
  user: IUser;
};

// functional component
const FirstComponent = memo(({ name, age }: IUser) => {
  console.log("FirstComponent has been updated");
  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

// functional component
const SecondComponent = ({ user: { name, age } }: IProps) => {
  return useMemo(() => {
    console.log("SecondComponent has been updated");
    return (
      <div>
        my name is {name}, my age is {age}
      </div>
    );
  }, [name, age]);
};

// class component
class ThirdComponent extends PureComponent<IUser> {
  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
class FourthComponent extends PureComponent<IProps> {
  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user);
  }
  render() {
    console.log("FourthComponent has been updated");

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
