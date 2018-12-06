import React from "react";
import { Context } from "../store/appContext.jsx";
import {
	Container,
	Button,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
	InputFile,
	Input,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBTabPane,
	MDBTabContent,
	MDBNav,
	MDBNavItem,
	MDBNavLink,
	MDBIcon
} from "mdbreact";

export default class ModalPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			username: "",
			password: ""
		};

		this.toggle = this.toggle.bind(this);
		this.getUserName = this.getUserName.bind(this);
		this.getPassword = this.getPassword.bind(this);
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	getUserName = event => {
		this.setState({
			username: event.target.value
		});
	};
	getPassword = event => {
		this.setState({
			password: event.target.value
		});
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Container>
							{/* BUTTON */}
							<Button color="primary" onClick={this.toggle}>
								Login
							</Button>
							{/* MODAL */}
							<Modal
								isOpen={this.state.modal}
								toggle={this.toggle}
								centered>
								<ModalHeader toggle={this.toggle}>
									Login
								</ModalHeader>
								<ModalBody>
									<Input
										type="text"
										label="Username"
										value={this.state.username}
										onChange={this.getUserName}
									/>
									<Input
										type="password"
										label="Password"
										value={this.state.password}
										onChange={this.getPassword}
									/>
								</ModalBody>
								<ModalFooter>
									<Button
										color="secondary"
										onClick={this.toggle}>
										Close
									</Button>
									<Button
										color="primary"
										onClick={event => {
											event.preventDefault();
											actions.login(
												this.state.username,
												this.state.password
											);
											this.toggle();
										}}>
										Login
									</Button>
								</ModalFooter>
							</Modal>
						</Container>
					);
				}}
			</Context.Consumer>
		);
	}
}
