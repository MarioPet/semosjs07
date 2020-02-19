import React from "react";
import {connect} from "react-redux";

class World extends React.Component {
    render() {
        return (
            <div id="world">
                <h2>This is from WORLD</h2>
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

export default connect(mapStateToProps, null)(World);