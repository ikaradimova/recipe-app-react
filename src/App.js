import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './pages/Profile';
import Favourite from './pages/Favourite';
import RecipeInfo from "./pages/RecipeInfo";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {getFirestore} from 'redux-firestore';
import {getFirebase} from "react-redux-firebase";

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
    }
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
    return <Provider store={store}>
        <Router>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    </Provider>
}

export default App;
