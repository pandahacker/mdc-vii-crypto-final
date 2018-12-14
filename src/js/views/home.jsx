import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CryptoTable from "../component/CryptoTable.jsx";
import { Container, Table, TableBody, TableHead } from "mdbreact";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="text-center mt-5">
							<h1 className="pb-4"> Is Everything on Fire? </h1>
							<Container>
								<Table>
									<TableHead color="elegant-color-dark" textWhite>
										<tr>
											<th>Symbol</th>
											<th>Price</th>
											<th>High</th>
											<th>Low</th>
										</tr>
									</TableHead>
									<TableBody>
										<CryptoTable values={store.cryptoValues} />
									</TableBody>
								</Table>
							</Container>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
