import React, {Component} from "react";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";
import {withRouter} from 'react-router';
import { history } from '../../helpers/history';

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
        console.log('submit');

        this.setState({ submitted: true });
        const { user } = this.state;
        console.log(user);
        if (user.firstname && user.lastname && user.email && user.password) {
            console.log('register');
            this.props.register(user);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.registration);
        if(this.props.registration.registering === 'success'){
            // createBrowserHistory().push('/login');
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content">
                    <h1 className="col-12 d-flex justify-content-center">Register</h1>
                </div>
                <p className={`error ${this.props.error !== undefined ? 'active': ''}`}>
                    {this.props.error !== undefined ? this.props.error.message : ''}
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
    console.log(state);
    return {
        // login: state.login,
        registration: state.registration,
        // registering: state.registering,
        error: state.error,
        // searchByIngredient: state.searchByIngredient
        // favoriteRecipes: state.favoriteRecipes
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        // login: actions.login,
        // logout: actions.logout,
        register: actions.register,
        // searchByIngredientAction: actions.searchByIngredientAction,
        // addFavoriteRecipe: actions.addFavoriteRecipe,
        // removeFavoriteRecipe: actions.removeFavoriteRecipe
    }, dispatch)
};

// export default withRouter(Users)
export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Register));