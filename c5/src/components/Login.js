import React from "react";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            type: "password"
        }
    }

    HandleFields = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    RevealPassword = () => {
        this.setState(prevState => ({
            type: prevState.type === "password" ? "text" : "password" 
        }));
    }

    Login = (e) => {
        e.preventDefault();
        if(this.state.email === "pero@gmail.com" && this.state.password === "secret") {
            this.props.history.push("/dashboard");
        } else {
            alert("Wrong email or password. Please try again.");
        }
    }

    render() {

        const HIDE = () => {
            return <span>&#10060;</span>
        }

        const SHOW = () => {
            return <span>&#128065;</span>
        }

        return (
            <div id="login">
                <form onSubmit={this.Login}>
                    <p>
                        <input onChange={this.HandleFields} name="email" type="text" placeholder="Enter E-mail" />
                    </p>
                    <p>
                        <input onChange={this.HandleFields} name="password" type={this.state.type} placeholder="Enter Password" />
                        <button onClick={this.RevealPassword} className="eye" type="button">
                            {this.state.type === "password" ? <SHOW /> : <HIDE />}
                        </button>
                    </p>
                    <p>
                        <button className="submit-button" type="submit">Log In</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default Login;