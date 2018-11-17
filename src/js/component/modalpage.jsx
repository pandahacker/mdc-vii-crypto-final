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
	Input
} from "mdbreact";

export default class ModalPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			userName: "",
			password: ""
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	getUserName = value => {
		this.setState({
			userName: value
		});
	};
	getPassword = value => {
		this.setState({
			password: value
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
										getValue={this.getUserName}
										label="Username"
									/>
									<Input
										getValue={this.getPassword}
										label="Password"
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
												this.state.userName,
												this.state.password
											);
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
