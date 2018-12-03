import React from "react";
import { Table, TableBody, TableHead } from "mdbreact";
import PropTypes from "prop-types";

export class CryptoTable extends React.Component {
	render() {
		return (
			<Table>
				<TableHead color="primary-color" textWhite>
					<tr>
						<th>{this.prop.map}</th>
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
		);
	}
}

CryptoTable.propTypes = {
	map: PropTypes.arrayOf(PropTypes.object)
};
