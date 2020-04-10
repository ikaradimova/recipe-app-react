import React, {Component} from "react";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Login extends Component{

    constructor(props) {
        super(props);

        this.props.logout();

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let errorMessage = document.getElementById('error');
        if (errorMessage.classList.contains('active')){
            errorMessage.classList.remove('active');
            errorMessage.innerHTML = "";
        }
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let errorMessage = document.getElementById('error');
        if (this.props.error.messageLogin !== undefined && this.props.authentication.logout !== undefined){
            errorMessage.classList.add('active');
            errorMessage.innerHTML = this.props.error.messageLogin;
        }
        if(this.props.authentication.loggedIn === true){
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content">
                    <h1 className="col-12 d-flex justify-content-center">Login</h1>
                </div>
                <p id="error"></p>
                <form onSubmit={this.handleSubmit} className="login-form">
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
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

const mapStateToProps = state => {
    return {
        authentication: state.authentication,
        error: state.error
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        login: actions.login,
        logout: actions.logout
    }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Login));