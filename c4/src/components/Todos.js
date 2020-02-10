import React from "react";
import Field from "./Field";
import Button from "./Button";
import TodoItem from "./TodoItem";

class Todos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            value: ""
        }
    }

    HandleTodoValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    AddTodo = () => {
        this.setState({
            todos: [
                ...this.state.todos,
                this.state.value
            ],
            value: ""
        })
    }

    render() {
        return (
            <div id="todo-container">
                <Field 
                    HandleTodoValue={this.HandleTodoValue}
                    value={this.state.value}
                />
                {" "}
                <Button Disabled={this.state.value === ""} AddTodo={this.AddTodo} />

                {
                    this.state.todos.length > 0 ?
                    <ol>{this.state.todos.map((todo, i) => {
                            return <li key={i}><TodoItem todo={todo} /></li>
                        })}</ol>: 
                    <h3>Todo list is empty. To change that add an item via the input field.</h3>
                }
            </div>
        )
    }
}

export default Todos;