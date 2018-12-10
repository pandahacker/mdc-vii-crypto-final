import React from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import { Container, Button, Input, Row, Col } from "mdbreact";

export class ForgotPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ""
		};

		this.getEmail = this.getEmail.bind(this);
	}

	getEmail = event => {
		this.setState({
			username: event.target.value
		});
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Container className="mb-5 py-3">
							<Row>
								<Col>
									<Input icon="envelope" type="email" label="Email" value={this.state.email} onChange={this.getEmail} />
									<Button
										color="danger"
										onClick={event => {
											event.preventDefault();
											actions.login(this.state.username, this.state.password);
											this.toggle();
										}}>
										Rese
									</Button>
								</Col>
							</Row>
						</Container>
					);
				}}
			</Context.Consumer>
		);
	}
}
