import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Container, Row, Col, Card, CardBody, CardImage, CardTitle, CardText, Table, TableHead, TableBody, MDBDataTable } from "mdbreact";
import HistoricalTable from "../component/HistoricalTable.jsx";
import moment from "moment";
import DASH from "../../img/DASH.png";
import XRP from "../../img/XRP.png";
import ETC from "../../img/ETC.png";
import EOS from "../../img/EOS.png";
import BCHSV from "../../img/BCHSV.png";
import LTC from "../../img/LTC.png";
import BTC from "../../img/BTC.png";
import XMR from "../../img/XMR.png";
import ZEC from "../../img/ZEC.png";
import ETH from "../../img/ETH.png";

export class Single extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cryptoHistory: [],
			coinType: ""
		};
		this.getHistory = this.getHistory.bind(this);
	}

	componentDidMount() {
		var url = `https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.location.state.coin}&tsym=USD&limit=40`;
		fetch(url, {
			method: "GET"
		})
			.then(res => res.json())
			.then(data => {
				data.Data.forEach(function(entry) {
					var readDate = moment.utc(entry.time * 1000).format("L");
					entry.time = readDate;
					console.log(readDate);
				});

				this.setState({
					cryptoHistory: data.Data
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	getHistory = () => {};

	render() {
		const img = "../" + this.props.location.state.coin + ".png";

		const data = {
			columns: [
				{
					label: "Date",
					field: "time",
					sort: "desc",
					width: 150
				},
				{
					label: "Open",
					field: "open",
					sort: "asc",
					width: 270
				},
				{
					label: "Low",
					field: "low",
					sort: "asc",
					width: 200
				},
				{
					label: "High",
					field: "high",
					sort: "asc",
					width: 100
				},
				{
					label: "Close",
					field: "close",
					sort: "asc",
					width: 150
				},
				{
					label: "Volume From",
					field: "volumefrom",
					sort: "asc",
					width: 200
				},
				{
					label: "Volume To",
					field: "volumeto",
					sort: "asc",
					width: 100
				}
			],
			rows: this.state.cryptoHistory
		};

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Container>
							<Row className="pt-3">
								<Col sm="12" lg="4">
									<Card>
										<CardImage className="img-fluid w-70 h-auto mx-auto pt-1" src={img} waves />
										<CardBody>
											<CardTitle className="text-center">{store.cryptoValues[this.props.match.params.theid].meta_keys.FROMSYMBOL}</CardTitle>
										</CardBody>
									</Card>
								</Col>
								<Col sm="12" lg="8">
									<Card className="p-3">
										<ResponsiveContainer width="100%" height={300}>
											<LineChart width={900} height={300} data={this.state.cryptoHistory} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
												<Line type="monotone" dataKey="close" stroke="#8884d8" />
												<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
												<Tooltip />
												<XAxis dataKey="time" />
												<YAxis dataKey="close" />
											</LineChart>
										</ResponsiveContainer>
									</Card>
								</Col>
							</Row>
							<Row>
								<Col>
									<Card className="mt-3">
										<MDBDataTable striped bordered hover data={data} order={["time", "desc"]} />
									</Card>
								</Col>
							</Row>
						</Container>
					);
				}}
			</Context.Consumer>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object,
	location: PropTypes.shape({
		state: PropTypes.object.isRequired
	}).isRequired,
	coin: PropTypes.string
};

// store.cryptoValues[this.props.match.params.theid].meta_keys.FROMSYMBOL

// <TableHead color="elegant-color-dark" textWhite>
// 												<tr>
// 													<th>Symbol</th>
// 													<th>Price</th>
// 													<th>High</th>
// 													<th>Low</th>
// 												</tr>
// 											</TableHead>
// 											<TableBody>
// 												<HistoricalTable values={this.state.cryptoHistory} />
// 											</TableBody>
