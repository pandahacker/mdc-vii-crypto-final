import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { Container, Row, Col } from "mdbreact";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Dashboard extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Container>
							<Row>
								<Col>
									<h3 className="text-center construction">[Page is currently under construction.]</h3>
								</Col>
							</Row>
						</Container>
					);
				}}
			</Context.Consumer>
		);
	}
}
