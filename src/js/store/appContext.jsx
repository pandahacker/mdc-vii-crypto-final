import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			// Set your fetchs/Ajax requests here.
			// make sure you're using the store: this.state.store

			fetch("https://wordpress-backend-pandahacker.c9users.io/wp-json/sample_api/v1/coin", {
				method: "GET"
			})
				.then(res => res.json())
				.then(data => {
					var store = this.state.store;
					store.cryptoValues = data;
					this.setState({
						store
					});
				})
				.catch(err => {
					console.log(err);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
