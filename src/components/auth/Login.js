import React, {Component} from "react";
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";
import {connect} from "react-redux";

class Login extends Component{

    constructor(props) {
        super(props);

        // reset login status
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
    console.log(state);
    return {
        authentication: state.authentication,
        // registration: state.registration,
        // searchByIngredient: state.searchByIngredient
        // favoriteRecipes: state.favoriteRecipes
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        login: actions.login,
        logout: actions.logout,
        // register: actions.register,
        // searchByIngredientAction: actions.searchByIngredientAction,
        // addFavoriteRecipe: actions.addFavoriteRecipe,
        // removeFavoriteRecipe: actions.removeFavoriteRecipe
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Login);
// export default Login;