import React from "react";
import { Link } from "react-router-dom";
import ModalPage from "./modalpage.jsx";
import {
	Navbar,
	NavbarBrand,
	NavbarNav,
	NavItem,
	NavbarToggler,
	Collapse,
	FormInline,
	NavLink
} from "mdbreact";

export class NavbarPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};

		this.toggleCollapse = this.toggleCollapse.bind(this);
	}

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		return (
			<Navbar color="elegant-color-dark" dark expand="md">
				<NavbarBrand>
					<a className="fas fa-coins d-inline-block" />
					<strong className="white-text ml-2">
						Crypto-Placeholder
					</strong>
				</NavbarBrand>
				<NavbarToggler onClick={this.toggleCollapse} />
				<Collapse
					id="navbarCollapse3"
					isOpen={this.state.isOpen}
					navbar>
					<NavbarNav left>
						<NavItem active>
							<NavLink to="/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/pricing">Pricing</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/aboutus">About Us</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="/contact">Contact</NavLink>
						</NavItem>
					</NavbarNav>
					<NavbarNav right>
						<NavItem>
							<FormInline waves>
								<div className="md-form my-0 pt-2">
									<input
										className="form-control mr-sm-2"
										type="text"
										placeholder="Search"
										aria-label="Search"
									/>
								</div>
							</FormInline>
						</NavItem>
						<NavItem>
							<ModalPage />
						</NavItem>
					</NavbarNav>
				</Collapse>
			</Navbar>
		);
	}
}
