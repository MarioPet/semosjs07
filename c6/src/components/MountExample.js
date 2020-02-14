import React from "react";

class Mount extends React.Component {

    componentWillUnmount() {
        console.log("The component MOUNT Unmounted");
    }

    componentDidMount() {
        console.log("The component MOUNT Mounted");
    }

    render() {
        return(
            <h2>Yo, from Mount!</h2>
        )
    }
}

export default Mount;