import React from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	NavbarBrand,
	NavbarNav,
	NavbarToggler,
	Collapse,
	NavItem,
	NavLink
} from "mdbreact";

export class NavbarPage extends React.Component {
	render() {
		constructor(props) {
	        super(props);
	        this.state = {
	            collapse: false,
	            isWideEnough: false,
	        };
		    this.onClick = this.onClick.bind(this);
	    }

	    onClick(){
	        this.setState({
	            collapse: !this.state.collapse,
	        });
	    }

		return (
			<Navbar color="indigo" dark expand="md" scrolling>
				<NavbarBrand href="/">
					<strong>Navbar</strong>
				</NavbarBrand>
				{ !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
				<Collapse isOpen = { this.state.collapse } navbar>
					<NavbarNav left>
					  <NavItem active>
						  <NavLink to="#">Home</NavLink>
					  </NavItem>
					  <NavItem>
						  <NavLink to="#">Features</NavLink>
					  </NavItem>
					  <NavItem>
						  <NavLink to="#">Pricing</NavLink>
					  </NavItem>
					</NavbarNav>
					<NavbarNav right>
					  <NavItem>
						<form className="form-inline md-form mt-0">
						  <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
						</form>
					  </NavItem>
					</NavbarNav>
				</Collapse>
			</Navbar>
		);
	}
}
