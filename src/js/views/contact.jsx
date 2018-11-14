import React from "react";
import { Container, Row, Col, Input, Button, Fa } from "mdbreact";

export class Contact extends React.Component {
	render() {
		return (
			<Container className="m-5 mx-auto py-3">
				<Row>
					<Col md="8">
						<form className="pr-5">
							<p className="h2 text-left mb-4">Contact Us</p>
							<div className="grey-text">
								<Input
									label="Your name"
									icon="user"
									group
									type="text"
									validate
									error="wrong"
									success="right"
								/>
								<Input
									label="Your email"
									icon="envelope"
									group
									type="email"
									validate
									error="wrong"
									success="right"
								/>
								<Input
									label="Subject"
									icon="tag"
									group
									type="text"
									validate
									error="wrong"
									success="right"
								/>
								<Input
									type="textarea"
									rows="2"
									label="Your message"
									icon="pencil"
								/>
							</div>
							<div className="text-right">
								<Button outline color="primary">
									Send{" "}
									<Fa icon="paper-plane-o" className="ml-1" />
								</Button>
							</div>
						</form>
					</Col>
					<Col md="8" />
				</Row>
			</Container>
		);
	}
}
