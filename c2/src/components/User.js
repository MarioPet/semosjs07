import React from "react";

class User extends React.Component {
    render() {
        return(
            <div className="user">
                <div>My name is: <h2>{this.props.firstName}</h2></div>
                <span>You can find me on: </span> 
                <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
            </div>
        )
    }
}

export default User;