/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Welcome from './Welcome';

export default class NavMenu extends Component {
  // eslint-disable-next-line react/static-property-placement
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    // this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      collapsed: true
      // dropCollapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      collapsed: !this.state.collapsed
    });
  }

  // toggleDropdown() {
  //   this.setState({
  //     // eslint-disable-next-line react/no-access-state-in-setstate
  //     dropCollapsed: !this.state.dropCollapsed
  //   });
  // }

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          container
          light>
          <NavbarBrand tag={Link} to="/">
            Ultra_Saver
          </NavbarBrand>
          <Welcome />
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!this.state.collapsed}
            navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/user/properties">
                  Properties
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/energycalculation">
                  Energy Cost
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-dark">
                  Recipes
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem tag={Link} to="/sharerecipe" className="text-dark">
                    Share Recipe
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sharerecipe" className="text-dark">
                    Search Recipes
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
