import React from 'react';
import Alert from "./Alert";
import User from "./User";
import HasVacancy from "./HasVacancy";
import Comment from "./Comment";

class App extends React.Component {
  render() {

    let user = {
      firstName: "Mario",
      lastName: "Petkovski",
      email: "mario5etkovski@gmail.com",
      age: 26
    }

    let movies = {
      title: "Pulp Fiction",
      genre: "Crime",
      released: 1994,
      rating: 8.9,
      awards: "1 Oscars",
      running_time: "137min.",
      logline: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      path: "https://www.imdb.com/title/tt0110912/",
      poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg"
    }

    return (
      <div className="app">
        <Alert
          name="Mario"
          course="ReactJS"
        />
        <hr />
        <User
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          age={user.age}
        />
        <hr />
        <HasVacancy
          roomNumber="367"
          available={false}
        />
        <hr />
        <Comment /> ★★★★★★★
      </div>
    );
  }
}

export default App;
