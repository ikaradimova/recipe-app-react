import React, {Component} from "react";

class Login extends Component{

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content">
                    <h1 className="col-12 d-flex justify-content-center">Login</h1>
                </div>
                <form onSubmit={this.handleSubmit} className="login-form">
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;