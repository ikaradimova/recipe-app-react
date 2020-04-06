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
import {NavLink as RRNavLink} from 'react-router-dom';
import {connect} from 'react-redux';

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
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact to="/login"
                                activeClassName="active">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact to="/register"
                                activeClassName="active">
                                Register
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="/profile"
                                activeClassName="active">
                                Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="/favourite"
                                activeClassName="active">
                                Favourite recipes
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Header);