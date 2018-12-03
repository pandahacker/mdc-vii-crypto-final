const getState = scope => {
	return {
		store: {
			auth_token: "key",
			username: "username",
			password: "password",
			cryptoValues: {}
		},
		actions: {
			login: (userName, passWord) => {
				fetch(
					"https://wordpress-backend-pandahacker.c9users.io/wp-json/jwt-auth/v1/token",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							username: userName,
							password: passWord
						})
					}
				)
					.then(res => res.json())
					.then(data => {
						var store = scope.state.store;
						store.auth_token = data.token;
						scope.setState({
							store
						});
					})
					.catch(err => {
						console.log(err);
					});
			},
			validate: () => {
				fetch("/user/data", {
					method: "GET",
					headers: {
						Authorization: "Bearer" + scope.state.store.auth_token
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	};
};

export default getState;
