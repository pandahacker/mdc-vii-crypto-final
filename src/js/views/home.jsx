import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { CryptoTable } from "../component/CryptoTable.jsx";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		cryptoValues: {}
	// 	};
	// 	this.getCryptoValues = this.getCryptoValues.bind(this);
	// }

	// getCryptoValues = () => {
	// 	fetch(
	// 		"https://wordpress-backend-pandahacker.c9users.io/wp-json/sample_api/v1/coin",
	// 		{
	// 			method: "GET"
	// 		}
	// 	)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			var values = this.state.cryptoValues;
	// 			values = data;
	// 			this.setState({
	// 				cryptoValues: values
	// 			});
	// 			console.log(values);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// };

	// componentDidMount() {
	// 	window.addEventListener("load", this.getCryptoValues);
	// }

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
							<CryptoTable map={store.cryptoValues} />
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
