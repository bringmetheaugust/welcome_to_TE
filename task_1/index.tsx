import { Component } from 'react';

type IProps = {
    name: string
    age: number
}

// functional component
const FirstComponent = ({ name, age }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
);

// class component
class SecondComponent extends Component<IProps> {    
    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// class component
class ThirdComponent extends Component<{ user: IProps }> {
    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        )
    }
}
