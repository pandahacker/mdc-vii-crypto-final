import React, { Component } from "react";

import { Col, Container, Row, Footer } from "mdbreact";

export class Footerpage extends React.Component {
	render() {
		return (
			<Footer color="elegant-color-dark" className="font-small pt-3 mt-4">
				<Container className="mt-5 mb-4 text-center text-md-left">
					<Row className="mt-3">
						<Col>
							<h6 className="text-uppercase font-weight-bold">
								<strong>Company name</strong>
							</h6>
							<hr
								className="primary-color accent-2 mb-4 mt-0 d-inline-block mx-auto"
								style={{ width: "60px" }}
							/>
							<p>
								Here you can use rows and columns here to
								organize your footer content. Lorem ipsum dolor
								sit amet, consectetur adipisicing elit.
							</p>
						</Col>
						<Col>
							<h6 className="text-uppercase font-weight-bold">
								<strong>Products</strong>
							</h6>
							<hr
								className="primary-color accent-2 mb-4 mt-0 d-inline-block mx-auto"
								style={{ width: "60px" }}
							/>
							<p>
								<a href="#!">MDBootstrap</a>
							</p>
							<p>
								<a href="#!">MDWordPress</a>
							</p>
							<p>
								<a href="#!">BrandFlow</a>
							</p>
							<p>
								<a href="#!">Bootstrap Angular</a>
							</p>
						</Col>
						<Col>
							<h6 className="text-uppercase font-weight-bold">
								<strong>Useful links</strong>
							</h6>
							<hr
								className="primary-color accent-2 mb-4 mt-0 d-inline-block mx-auto"
								style={{ width: "60px" }}
							/>
							<p>
								<a href="#!">Your Account</a>
							</p>
							<p>
								<a href="#!">Become an Affiliate</a>
							</p>
							<p>
								<a href="#!">Shipping Rates</a>
							</p>
							<p>
								<a href="#!">Help</a>
							</p>
						</Col>
						<Col>
							<h6 className="text-uppercase font-weight-bold">
								<strong>Contact</strong>
							</h6>
							<hr
								className="primary-color accent-2 mb-4 mt-0 d-inline-block mx-auto"
								style={{ width: "60px" }}
							/>
							<p>
								<i className="fa fa-home mr-3" /> Miami, FL , US
							</p>
							<p>
								<i className="fa fa-envelope mr-3" />{" "}
								info@example.com
							</p>
							<p>
								<i className="fa fa-phone mr-3" /> + 01 234 567
								88
							</p>
							<p>
								<i className="fa fa-print mr-3" /> + 01 234 567
								89
							</p>
						</Col>
					</Row>
				</Container>
				<div className="footer-copyright text-center py-3">
					<Container fluid>
						&copy; {new Date().getFullYear()} Copyright:{" "}
						<a href="https://www.MDBootstrap.com">
							{" "}
							MDBootstrap.com{" "}
						</a>
					</Container>
				</div>
			</Footer>
		);
	}
}

export default Footerpage;
