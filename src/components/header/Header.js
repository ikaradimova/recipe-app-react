import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import {Link, NavLink as RRNavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from "../../redux/actions";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return <Navbar color="primary" dark expand="md">
            <Container>
                <NavLink
                    tag={RRNavLink}
                    className="navbar-brand"
                    exact to="/">
                    <i className="fa fa-cutlery mr-3"></i>
                    <span className="project-name">Recipe App</span>
                </NavLink>
                <NavbarToggler onClick={this.toggleIsOpen} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact to="/"
                                activeClassName="active">
                                Home
                            </NavLink>
                        </NavItem>
                        {/*<NavItem>*/}
                        {/*    <NavLink*/}
                        {/*        tag={RRNavLink}*/}
                        {/*        exact*/}
                        {/*        to="/favourite"*/}
                        {/*        activeClassName="active">*/}
                        {/*        Favourite recipes*/}
                        {/*    </NavLink>*/}
                        {/*</NavItem>*/}
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="/random/trivia"
                                activeClassName="active">
                                Random Food Trivia
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="/random/joke"
                                activeClassName="active">
                                Random Food Joke
                            </NavLink>
                        </NavItem>
                        {(this.props.authentication.loggedIn === undefined) ?
                            <NavItem>
                                <NavLink
                                    tag={RRNavLink}
                                    exact to="/login"
                                    activeClassName="active">
                                    Login
                                </NavLink>
                            </NavItem> : ''
                        }
                        {(this.props.authentication.loggedIn === undefined) ?
                            <NavItem>
                                <NavLink
                                    tag={RRNavLink}
                                    exact to="/register"
                                    activeClassName="active">
                                    Register
                                </NavLink>
                            </NavItem> : ''
                        }
                        {(this.props.authentication.loggedIn) ?
                            <NavItem>
                            <Link to="/login" className="nav-link">Logout</Link>
                            </NavItem>
                            : ''
                        }
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    }
}

const mapStateToProps = state => {
    return {
        authentication: state.authentication
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        login: actions.login,
        logout: actions.logout
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(Header);