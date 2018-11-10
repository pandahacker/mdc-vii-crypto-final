import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

export class Navbar extends React.Component {
	render() {
		const menu = [
			{ label: "REGISTER", url: "register" },
			{ label: "PRICING", url: "pricing" },
			{ label: "ABOUT US", url: "about" },
			{ label: "CONTACT", url: "contact" }
		];

		const items = menu.map(item => (
			<li key={item.index} className="nav-item">
				<Link className="nav-link" to={`/${item.url}`}>
					{item.label}
				</Link>
			</li>
		));

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<i className="navbar-brand fas fa-coins" />
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">{items}</ul>
				</div>
			</nav>
		);
	}
}
