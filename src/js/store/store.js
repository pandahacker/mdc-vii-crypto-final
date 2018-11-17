const getState = scope => {
	return {
		store: {
			auth_token: "key",
			username: "username",
			password: "password"
		},
		actions: {
			getUserName: name => {
				let store = scope.state.store;
				store.username = name;
				scope.setState({ store });
			},
			getPassword: name => {
				let store = scope.state.store;
				store.password = name;
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
							password: ""
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
