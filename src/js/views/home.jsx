import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { Table, TableBody, TableHead } from "mdbreact";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="text-center mt-5">
							<h1>{store.auth_token}</h1>
							<p>
								<img src={rigoImage} />
							</p>
							<a href="#" className="btn btn-success">
								If you see this green button, bootstrap is
								working
							</a>
							<hr />
							<Link to="/demo">
								<button className="btn btn-primary">
									Check the Context in action
								</button>
							</Link>
							<p>
								Made by{" "}
								<a href="http://www.4geeksacademy.com">
									4Geeks Academy
								</a>
								, with love!
							</p>
							<Table>
								<TableHead color="primary-color" textWhite>
									<tr>
										<th>#</th>
										<th>First</th>
										<th>Last</th>
										<th>Handle</th>
									</tr>
								</TableHead>
								<TableBody>
									<tr>
										<td>1</td>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Jacob</td>
										<td>Thornton</td>
										<td>@fat</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Larry</td>
										<td>the Bird</td>
										<td>@twitter</td>
									</tr>
								</TableBody>
							</Table>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
