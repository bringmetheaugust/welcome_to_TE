import { Component } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component
const FirstComponent = ({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.
const SecondComponent = ({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

// class component
class ThirdComponent extends Component<IUser> {
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
    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}