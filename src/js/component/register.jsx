import React from "react";
import { Container, Input, Button, Modal, ModalBody, ModalHeader, ModalFooter, MDBAlert, MDBContainer } from "mdbreact";
import { Context } from "../store/appContext.jsx";

export class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			username: "",
			email: "",
			password: ""
		};

		this.getUserName = this.getUserName.bind(this);
		this.getPassword = this.getPassword.bind(this);
		this.getEmail = this.getEmail.bind(this);
		this.toggle = this.toggle.bind(this);
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
	getEmail = event => {
		this.setState({
			email: event.target.value
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
						<Container className="pr-1">
							{/* BUTTON */}
							<Button color="info" onClick={this.toggle}>
								Register
							</Button>
							{/* MODAL */}
							<Modal isOpen={this.state.modal} toggle={this.toggle} centered>
								<ModalHeader toggle={this.toggle}>Login</ModalHeader>
								<ModalBody>
									<Input type="text" label="Username" value={this.state.username} onChange={this.getUserName} />
									<Input type="text" label="Email" value={this.state.email} onChange={this.getEmail} />
									<Input type="password" label="Password" value={this.state.password} onChange={this.getPassword} />
								</ModalBody>
								<ModalFooter>
									<Button
										color="primary"
										onClick={event => {
											event.preventDefault();
											actions.createUser(this.state.username, this.state.email, this.state.password);
											this.toggle();
										}}>
										Register
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
