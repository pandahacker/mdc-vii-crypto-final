import React from "react";
import {
	Container,
	Row,
	Button,
	Card,
	CardBody,
	CardImage,
	CardTitle,
	CardText,
	Col
} from "mdbreact";

export class Pricing extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col size="6">
						<Card className="my-5">
							<CardBody>
								<CardTitle className="">Free Tier</CardTitle>
								<hr />
								<h1 className="text-center m-5">
									&#36;0
									<small className="text-muted">/ mo</small>
								</h1>
								<CardText className="mt-3">
									<ul>
										<li>Access to pricing info</li>
										<li>
											Personalized dashboard with
											favorites
										</li>
										<li>View limited historical data</li>
									</ul>
									<Button
										color="primary"
										className="float-right mt-2"
										href="#">
										Register
									</Button>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col size="6">
						<Card className="my-5">
							<CardBody>
								<CardTitle>Trader Tier</CardTitle>
								<hr />
								<h1 className="text-center m-5">
									&#36;10
									<small className="text-muted">/ mo</small>
								</h1>
								<CardText className="mt-3">
									<ul>
										<li>Access to live pricing info</li>
										<li>
											Personalized dashboard with
											favorites
										</li>
										<li>View full historical data</li>
									</ul>
									<div>
										<form
											action="https://www.paypal.com/cgi-bin/webscr"
											method="post"
											target="_top">
											<input
												type="hidden"
												name="cmd"
												value="_s-xclick"
											/>
											<input
												type="hidden"
												name="hosted_button_id"
												value="RAYVJRVQUPYUW"
											/>
											<input
												type="submit"
												className="btn btn-primary float-right mt-2"
												border="0"
												name="submit"
												alt="PayPal - The safer, easier way to pay online!"
												value="Subscribe"
											/>
											<img
												alt=""
												border="0"
												src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
												width="1"
												height="1"
											/>
										</form>
									</div>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
