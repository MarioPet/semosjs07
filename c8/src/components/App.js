import React from 'react';
import { connect } from "react-redux";
import { FetchMovieListStart } from "../actions/MoviesActions";
import { AddTodo } from "../actions/TodosActions";
import Hello from './Hello';
import World from './World';
import Todos from './Todos';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todoValue: ""
    }
  }

  componentDidMount() {

    // Ako pravime dispatch vo samata akcija
    // FetchMovieList()

    // Ako sakame direktno vo komponentata da pravime dispatch
    this.props.dispatch(FetchMovieListStart());
  }

  HandleTodoValueChange = (e) => {
    this.setState({
      todoValue: e.target.value
    })
  }

  AddTodo = () => {
    this.props.dispatch(AddTodo(this.state.todoValue));
    this.setState({
      todoValue: ""
    })
  }

  render(){ 
    return (
      <div className="app">
        { console.log(this.props) }
        <h2>This is from APP</h2>
        <ol>
          {
            this.props.movies.map((movie, i) => {
              return <li key={i}>{movie}</li>
            })
          }
        </ol>

        <Hello />
        <World />

        <br/>
        <hr /> 

        <input 
          value={this.state.todoValue}
          type="text"
          placeholder="Add Todo"
          onChange={this.HandleTodoValueChange}
        />
        {" "}
        <button onClick={this.AddTodo}>SUBMIT</button> 
        <Todos />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.MoviesReducer.movies
  }
}

export default connect(mapStateToProps, null)(App);