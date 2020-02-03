import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Favourite from './pages/Favourite';
import RecipeInfo from "./pages/RecipeInfo";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

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
            <RecipeInfo/>
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
    return (
        <Router>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    );
}

export default App;
