import { Component, createRef } from 'react';

class MainComponent extends Component {
    myRef = createRef(); // create simple ref

    render() {
        return <ChildComponent myRef={this.myRef} />; // pass ref as a prop
    }
};

class ChildComponent extends Component {
    render() {
        return (
            <button ref={this.props.myRef}>button with ref</button> // receive ref and set it to the button
        );
    }
};
