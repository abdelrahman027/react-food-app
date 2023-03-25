import { Component } from "react";

class Test extends Component {
    constructor() {
        super();
        this.state = {
            showName: true,
        }
    }

    changeNameHandler() {
        this.setState((myState) => {
            return { showName: !myState.showName }
        })
    }
    render() {
        return (
            <>
                <h1>this is my class {this.state.showName && this.props.name}</h1>
                <button onClick={this.changeNameHandler.bind(this)}>change</button>
            </>
        )

    };
};

export default Test;