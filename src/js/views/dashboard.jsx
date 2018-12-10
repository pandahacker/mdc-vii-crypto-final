import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { Container, Row, Table, TableBody, TableHead } from "mdbreact";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Dashboard extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Container>
							<Row />
						</Container>
					);
				}}
			</Context.Consumer>
		);
	}
}
