import React from "react";
import { Container, Row, Col, Input, Button, Fa } from "mdbreact";
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
	}

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
						<Container className="m-5 mx-auto py-3">
							<Row>
								<Col md="6" lg="12">
									<form className="pr-5">
										<p className="h2 text-left mb-4">
											Register
										</p>
										<div className="grey-text">
											<Input
												type="text"
												label="Username"
												value={this.state.username}
												onChange={this.getUserName}
											/>
											<Input
												type="text"
												label="Email"
												value={this.state.email}
												onChange={this.getEmail}
											/>
											<Input
												type="password"
												label="Password"
												value={this.state.password}
												onChange={this.getPassword}
											/>
										</div>
										<div className="text-right">
											<Button
												color="primary"
												onClick={event => {
													event.preventDefault();
													actions.createUser(
														this.state.username,
														this.state.email,
														this.state.password
													);
												}}>
												Register
											</Button>
										</div>
									</form>
								</Col>
							</Row>
						</Container>
					);
				}}
			</Context.Consumer>
		);
	}
}
