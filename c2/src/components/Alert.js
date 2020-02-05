import React from "react";

class Alert extends React.Component {
    render() {

        console.log(this.props.name);

        return (
            <h2>Hello {this.props.name}, welcome to {this.props.course}.</h2>
        )
    }
}

export default Alert;