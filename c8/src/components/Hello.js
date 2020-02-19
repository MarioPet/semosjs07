import React from "react";
import {connect} from "react-redux";

class Hello extends React.Component {
    render() {
        return (
            <div id="hello">
                <h2>This is from HELLO</h2>
                <ol>
                    {
                        this.props.movies.map((movie, i) => {
                            return <li key={i}>{movie}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.MoviesReducer.movies
    }
}

export default connect(mapStateToProps, null)(Hello);