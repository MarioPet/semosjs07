import React from 'react';
import Mount from './MountExample';
import { API_URL } from "../constants";
import axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showComponent: true,
      users: [],
      newUsers: [],
      showLoader: false,
      error: ""
    }

    console.log("From Constructor");
  }

  componentDidMount() {
    console.log("From Component Did Mount");
    this.FetchUsers();
    this.FetchNewUsers();
  }

  ToggleComponent = () => {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }))
  }

  FetchUsers = () => {
    fetch(`${API_URL}/users`)
      .then(res => { return res.json(); })
      .then(res => this.setState({ users: res }))
      .catch(err => console.error(err));
  }

  FetchNewUsers = () => {
    this.setState({ showLoader: true});
    axios.get(`${API_URL}/userasdasdasdss`)
      .then(res => {
        if(res.status === 200) {
          this.setState({
            newUsers: res.data,
            showLoader: false,
            error: ""
          })
        }
      })
      .catch(err => this.setState({ error: "Error Fetching Users!", showLoader: false}) );
  }

  render() {

    console.log(this.state);

    return (
      <div className="app">
        <button onClick={this.ToggleComponent}>Click me</button>
        {this.state.showComponent ? <Mount /> : null}
        <hr />
        {
          this.state.users.length > 0
          ?
          this.state.users.map(user => { return <h2 key={user.id}>{user.name}</h2> })
          :
          <h2>Loading...</h2>
        }
        <hr/>
        {this.state.showLoader ?
          <h2>Loading...</h2> :
            this.state.error === "" ?
            this.state.newUsers.map(user => { return <h2 key={user.id}>{user.name}</h2> }) : 
            <h2>{this.state.error}</h2>}
      </div>
    );
  }
}

export default App;