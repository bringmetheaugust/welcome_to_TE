import { Component, createRef } from 'react';

class MainComponent extends Component {
    myRef = createRef(); // create simple ref

    toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

    render() {
        return (
            <>
                <button onClick={this.toggleChildVisibility}>toggle child component</button>
                <ChildComponent ref={this.myRef} />  {/* set ref to controll child component */}
            </>
        );
    }
};

class ChildComponent extends Component {
    state = { isActive: true };

    toggleButton = () => this.setState({ isActive: !this.state.isActive });

    render() {
        return (
            this.state.isActive ? <div>child component</div> : null
        );
    }
};
