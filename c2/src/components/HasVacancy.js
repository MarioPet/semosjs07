import React from "react";

class HasVacancy extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    Room #{this.props.roomNumber}
                    { this.props.available ? " is available!" : " is not available!" }
                </h2>
            </div>
        )
    }
}

export default HasVacancy;