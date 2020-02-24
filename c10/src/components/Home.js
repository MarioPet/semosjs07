import React from "react";
import { Link } from "react-router-dom"

const Home = ()  => {
    return (
        <div id="home">
            <h2>Hi my name is John Doe. I'm a photographer.</h2>
            <h4>This is my Photo Website</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum at in, aperiam nisi labore vitae sint totam sequi reprehenderit eaque rerum velit porro voluptas cum cumque quidem. Itaque, sed ad!</p>
            <Link to="/gallery">Find out more</Link>
        </div>
    )
}

export default Home;