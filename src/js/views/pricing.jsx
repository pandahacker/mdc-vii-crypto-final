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
				<div align="center">
					<div clasNames="card">
						<h1 className="card-header">
							<center>30 day trial </center>
						</h1>
						<div className="card-body">
							<h2 className="card-title">
								<div align="center">20 USD per month</div>
							</h2>
							<div className="card-text">
								<ul>
									<p>Access to membership features</p>
									<p>
										{" "}
										<CardImage src="https://s2.coinmarketcap.com/static/img/coins/128x128/2.png" />
									</p>
								</ul>
							</div>
							<a href="#" className="btn btn-primary">
								Order
							</a>
						</div>
					</div>
				</div>

				<div align="center">
					<div clasNames="card">
						<h1 className="card-header">
							<center>Personal</center>
						</h1>

						<h2 className="card-title">
							<div align="center">40 USD per month</div>
						</h2>
						<div className="card-text">
							<ul>
								<p>Access to membership features</p>
								<p>
									{" "}
									<CardImage src="https://www.coinbase.com/assets/assets/1-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png" />
								</p>
							</ul>
						</div>

						<a href="#" className="btn btn-primary">
							Order
						</a>
					</div>
				</div>
			</Container>
		);
	}
}
