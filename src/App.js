import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './pages/Profile';
import Favourite from './pages/Favourite';
import RecipeInfo from "./pages/RecipeInfo";
import FoodTrivia from "./pages/FoodTrivia";
import FoodJoke from "./pages/FoodJoke";
import {history} from "./helpers/history";
import {
    Route,
    BrowserRouter as Router,
    Switch, withRouter
} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {createStore, applyMiddleware, bindActionCreators} from "redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {getFirestore} from 'redux-firestore';
import {getFirebase} from "react-redux-firebase";

import { usersFetch } from './helpers/usersFetch';
import * as actions from "./redux/actions";
usersFetch();

const store = createStore(reducers, applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})));

const Layout = props => (
    <>
        <Header/>
        <div className="container mt-5">
            {props.children}
        </div>
    </>
);

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <Home/>
        </Layout>
    },
    {
        path: '/login',
        exact: true,
        main: () => <Layout>
            <Login/>
        </Layout>
    },
    {
        path: '/register',
        exact: true,
        main: () => <Layout>
            <Register/>
        </Layout>
    },
    {
        path: '/profile',
        exact: true,
        main: () => <Layout>
            <Profile/>
        </Layout>
    },
    {
        path: '/favourite',
        exact: true,
        main: () => <Layout>
            <Favourite/>
        </Layout>
    },
    {
        path: '/recipe/:id',
        exact: false,
        main: () => <Layout>
            <RecipeInfo />
        </Layout>
    },
    {
        path: '/random/trivia',
        exact: true,
        main: () => <Layout>
            <FoodTrivia/>
        </Layout>
    },
    {
        path: '/random/joke',
        exact: true,
        main: () => <Layout>
            <FoodJoke/>
        </Layout>
    },
];

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route
            exact={route.exact}
            key={index}
            path={route.path}
        >
            {route.main}
        </Route>
    })
};

function App() {
    // console.log(this.props.authentication);
    return <Provider store={store}>
        <Router history={history}>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    </Provider>
}

// const mapStateToProps = state => {
//     console.log(state);
//     return {
//         authentication: state.authentication,
//         // registration: state.registration,
//         // searchByIngredient: state.searchByIngredient
//         // favoriteRecipes: state.favoriteRecipes
//     }
// };
//
//
// const mapStateToDispatch = dispatch => {
//     return bindActionCreators({
//         login: actions.login,
//         logout: actions.logout,
//         // register: actions.register,
//         // searchByIngredientAction: actions.searchByIngredientAction,
//         // addFavoriteRecipe: actions.addFavoriteRecipe,
//         // removeFavoriteRecipe: actions.removeFavoriteRecipe
//     }, dispatch)
// };

// export default connect(mapStateToProps, mapStateToDispatch)(App);
export default App;
