import React from "react";
import {
	Container,
	Row,
	Button,
	Card,
	CardBody,
	CardImage,
	CardTitle,
	CardText,
	Col
} from "mdbreact";

export class AboutUs extends React.Component {
	render() {
		return (
			<Container className="m-3 mx-auto py-3">
				<Row>
					<Col sm="12" lg="4">
						<Card className="my-4">
							<CardImage
								className="img-fluid"
								src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
								waves
							/>
							<CardBody>
								<CardTitle className="text-center">
									Henry Orama
								</CardTitle>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Suspendisse pretium porta
									accumsan. Vestibulum a lorem ac ex auctor
									vulputate quis vitae purus. Morbi tincidunt
									rhoncus quam nec pulvinar. Ut orci dui,
									faucibus in leo ornare, vulputate consequat
									sem. Cras vel lobortis enim. Maecenas
									eleifend eleifend odio, eu pellentesque
									turpis consequat id. Integer eu sagittis
									justo.
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" lg="4">
						<Card className="my-4">
							<CardImage
								className="img-fluid"
								src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
								waves
							/>
							<CardBody>
								<CardTitle className="text-center">
									Blake Albertson
								</CardTitle>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Suspendisse pretium porta
									accumsan. Vestibulum a lorem ac ex auctor
									vulputate quis vitae purus. Morbi tincidunt
									rhoncus quam nec pulvinar. Ut orci dui,
									faucibus in leo ornare, vulputate consequat
									sem. Cras vel lobortis enim. Maecenas
									eleifend eleifend odio, eu pellentesque
									turpis consequat id. Integer eu sagittis
									justo.
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12" lg="4">
						<Card className="my-4">
							<CardImage
								className="img-fluid"
								src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
								waves
							/>
							<CardBody>
								<CardTitle className="text-center">
									Vincent Vazquez
								</CardTitle>
								<CardText>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Suspendisse pretium porta
									accumsan. Vestibulum a lorem ac ex auctor
									vulputate quis vitae purus. Morbi tincidunt
									rhoncus quam nec pulvinar. Ut orci dui,
									faucibus in leo ornare, vulputate consequat
									sem. Cras vel lobortis enim. Maecenas
									eleifend eleifend odio, eu pellentesque
									turpis consequat id. Integer eu sagittis
									justo.
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
