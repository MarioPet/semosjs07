import React from 'react';
// import Rating from './Rating';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      shoppingCartItems: 0
    }

  }

  NameChangeHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  Increment = () => {
    this.setState(prevState => ({
      shoppingCartItems: prevState.shoppingCartItems + 1
    }))
  }
  
  Decrement = () => {
    this.setState(prevState => ({
      shoppingCartItems: prevState.shoppingCartItems === 0 ? 0 : prevState.shoppingCartItems - 1 
    }))
  }

  render() {
    return (
      <div id="app">
        {/* <Rating value={8} colors={["red", "green", "blue"]} /> */}

        <input 
          type="text" 
          placeholder="Enter your name"
          onChange={this.NameChangeHandler}
        />
        <h2>Your name is: <span>{this.state.name}</span> </h2>

        <hr />
        <br />

        <button onClick={this.Decrement}> &minus; </button>
        <span> {this.state.shoppingCartItems} </span>
        <button onClick={this.Increment}> &#43;</button>
      </div>
    )
  }
}

export default App;