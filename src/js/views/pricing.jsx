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
				<div align="right">
					<div clasNames="card">
						<h5 className="card-header">
							<center>30 day trial</center>
						</h5>
						<div className="card-body">
							<div align="left">
								<CardImage src="https://via.placeholder.com/150" />
							</div>
							<h5 className="card-title">
								<div align="right">20 USD per month</div>
							</h5>
							<p className="card-text">
								<ul>
									<p>Access to membership features</p>
									<p>Greeting: &quot;Hello, World!&quot;</p>
									<p>Greeting: &quot;Hello, World!&quot;</p>
								</ul>
							</p>
							<a href="#" className="btn btn-primary">
								Order
							</a>
						</div>
					</div>
				</div>

				<div align="right">
					<div clasNames="card">
						<h5 className="card-header">
							<center>Personal</center>
						</h5>
						<div className="card-body">
							<div align="left">
								{" "}
								<CardImage src="https://via.placeholder.com/150" />{" "}
							</div>
							<h5 className="card-title">40 USD per month</h5>
							<p className="card-text">
								<ul>
									<p>Access to membership features</p>
									<p>Greeting: &quot;Hello, World!&quot;</p>
									<p>Greeting: &quot;Hello, World!&quot;</p>
								</ul>
							</p>
							<a href="#" className="btn btn-primary">
								Order
							</a>
						</div>
					</div>
				</div>
			</Container>
		);
	}
}
