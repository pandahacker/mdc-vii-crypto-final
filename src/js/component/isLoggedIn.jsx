import React from "react";
import { Link } from "react-router-dom";
import ModalPage from "./modalpage.jsx";
import { Button, NavItem, NavLink } from "mdbreact";
import PropTypes from "prop-types";

export default class IsLoggedIn extends React.Component {
	render() {
		var auth = this.props.auth;
		var userInfo = this.props.userInfo;
		console.log(auth);
		if (auth === "key") {
			return <ModalPage />;
		} else if (auth != "key") {
			return (
				<NavItem>
					<NavLink className="my-0 pt-2" to="/dashboard">
						Welcome {userInfo.user_display_name}!
					</NavLink>
				</NavItem>
			);
		}
	}
}

IsLoggedIn.propTypes = {
	auth: PropTypes.string,
	userInfo: PropTypes.object
};
