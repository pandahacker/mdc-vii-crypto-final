import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { AboutUs } from "./views/aboutus.jsx";
import { Contact } from "./views/contact.jsx";
import { Pricing } from "./views/pricing.jsx";
import { Single } from "./views/single.jsx";
import Store from "./store/appContext.jsx";

import { NavbarPage } from "./component/navbar.jsx";
import { Footerpage } from "./component/footer.jsx";
import { Col, Container, Row, Footer } from "mdbreact";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<NavbarPage />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/aboutus" component={AboutUs} />
						<Route path="/contact" component={Contact} />
						<Route path="/pricing" component={Pricing} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footerpage />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
