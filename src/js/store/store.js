const getState = scope => {
	return {
		store: {
			auth_token: "key"
		},
		actions: {
			changeColor: (element, color) => {
				let store = scope.state.store;
				store.demo[element].background = color;
				scope.setState({ store });
			},
			login: (username, password) => {
				fetch(
					"https://wordpress-backend-pandahacker.c9users.io/wp-json/jwt-auth/v1/token",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							username: "pandahacker",
							password: "b7328257!"
						})
					}
				)
					.then(res => res.json())
					.then(data => {
						var store = this.state.store;
						store.auth_token = data.token;
						this.setState({
							store
						});
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	};
};

export default getState;
