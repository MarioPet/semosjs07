import React from 'react';
import { connect } from "react-redux";
import { IncrementItem, DecrementItem } from "../actions/ShoppingCartActions";
import { FillUsername } from "../actions/UserActions";

class App extends React.Component {

  
  render() {
    return (
      <div className="app">
        <button onClick={() => this.props.dispatch(DecrementItem())}> - </button>
        <span> {this.props.shoppingCartItems} </span>
        <button onClick={() => this.props.dispatch(IncrementItem())}> + </button>
        <hr />
        <button onClick={() => this.props.dispatch(FillUsername("Mario"))}>Fill Username</button>
        <h2>{this.props.userName}</h2>

        <hr />

        {/* <button>{Show} Date</button>
        {<h2>21.02.2020</h2>} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCartItems: state.ShoppingCartReducer.shoppingCartItems,
    userName: state.UserReducer.userName
  }
} 

export default connect(mapStateToProps, null)(App);