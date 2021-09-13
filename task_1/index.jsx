import { Component } from 'react';

// functional component
const FirstComponent = ({ name }) => (
    <div>my name is {name}</div>
);

// class component
class SecondComponent extends Component {
    render() {
        return (
            <div>my name is {this.props.name}</div>
        )
    }
}
