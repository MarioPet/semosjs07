import React from 'react';
import { FetchUser } from "../actions/UserActions";
import { connect } from "react-redux";

class App extends React.Component {

  componentDidMount() {
    this.props.NashaFetchUserFunkcija();
  }

  render() {
    return (
      <div id="app">Hello, {this.props.user}</div>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    user: state.userReducer.user 
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    NashaFetchUserFunkcija: () => { 
      dispatch(FetchUser())
     } 
  }
}

export default App = connect(MapStateToProps, MapDispatchToProps)(App);