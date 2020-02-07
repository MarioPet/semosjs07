import React from "react";
import PropTypes from "prop-types";

class Rating extends React.Component {
    render() {
        return (
            <div><h2>The Rating is {this.props.value}/10</h2></div>
        )
    }
}

Rating.propTypes = {
    value: PropTypes.number,
    colors: PropTypes.array
}

export default Rating;