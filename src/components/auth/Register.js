import React, {Component} from "react";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter} from 'react-router';

class Register extends Component{

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let errorMessage = document.getElementById('error');
        if (errorMessage.classList.contains('active')){
            errorMessage.classList.remove('active');
            errorMessage.innerHTML = "";
        }
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstname && user.lastname && user.email && user.password) {
            this.props.register(user);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let errorMessage = document.getElementById('error');
        if (this.props.error.messageRegister !== undefined){
            errorMessage.classList.add('active');
            errorMessage.innerHTML = this.props.error.messageRegister;
        }
        if(this.props.registration.registering === 'success'){
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content">
                    <h1 className="col-12 d-flex justify-content-center">Register</h1>
                </div>
                <p id="error">
                </p>
                <form onSubmit={this.handleSubmit} className="register-form">
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
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            className="form-control"
                            placeholder="firstname"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            className="form-control"
                            placeholder="lastname"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-outline-primary" onClick={this.handleSubmit}>Register</button>
                    </div>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        registration: state.registration,
        error: state.error
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        register: actions.register
    }, dispatch)
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Register));