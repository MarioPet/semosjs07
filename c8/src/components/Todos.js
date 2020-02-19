import React from "react";
import { connect } from "react-redux";

class Todos extends React.Component {
    render() {
        return (
            <ol>
                {
                    this.props.todos.map((todo, i) => {
                        return <li key={i}>{todo}</li>
                    })
                }
            </ol>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.TodosReducer.todos
    }
  }
  
export default connect(mapStateToProps, null)(Todos);