import React from "react";
import { Table, TableBody, TableHead } from "mdbreact";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HistoricalTable = props => {
	var tableRows = props.values.map((coin, index) => {
		var open = parseFloat(coin.open).toFixed(2);
		var high = parseFloat(coin.high).toFixed(2);
		var low = parseFloat(coin.low).toFixed(2);

		if (props.values.length != 0) {
			return (
				<tr key={index}>
					<td>{coin.time}</td>
					<td>${open}</td>
					<td>${high}</td>
					<td>${low}</td>
				</tr>
			);
		}
	});

	return tableRows;
};

export default HistoricalTable;
