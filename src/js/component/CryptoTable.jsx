import React from "react";
import { Table, TableBody, TableHead } from "mdbreact";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CryptoTable = props => {
	console.log(props.values.length);
	var tableRows = props.values.map((coin, index) => {
		var price = parseFloat(coin.meta_keys.PRICE).toFixed(2);
		var highDay = parseFloat(coin.meta_keys.HIGHDAY).toFixed(2);
		var lowDay = parseFloat(coin.meta_keys.LOWDAY).toFixed(2);

		if (props.values.length != 0) {
			return (
				<tr key={index}>
					<td>
						<Link to={"/single/" + index}>
							<span>{coin.meta_keys.FROMSYMBOL}</span>
						</Link>
					</td>
					<td>${price}</td>
					<td>${highDay}</td>
					<td>${lowDay}</td>
				</tr>
			);
		}
	});

	return tableRows;
};

export default CryptoTable;
