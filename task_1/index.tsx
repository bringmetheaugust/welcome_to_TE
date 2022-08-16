import { memo } from "react";
import { Component, PureComponent } from "react";

type IUser = {
  name: string;
  age: number;
};

type IProps = {
  user: IUser;
};

// functional component
export const FirstComponent = memo(({ name, age }: IUser) => {
  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});
const areEqual = (prevProps, nextProps) => {
  // console.log(prevProps, nextProps);
  return (
    prevProps.user.name === nextProps.user.name &&
    prevProps.user.age === nextProps.user.age
  );
};
// functional component
export const SecondComponent = memo(({ user: { name, age } }: IProps) => {
  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
}, areEqual);

// class component
export class ThirdComponent extends PureComponent<IUser> {
  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
export class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(prevProps) {
    // console.log(prevProps.user.name === this.props.user.name);
    if (
      prevProps.user.name !== this.props.user.name &&
      prevProps.user.age !== this.props.user.age
    ) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("run");
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
