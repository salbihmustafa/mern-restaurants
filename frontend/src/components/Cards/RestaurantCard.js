import {Button, Card, Container, Row, Col} from "react-bootstrap";

const RestaurantCard = ({restaurantTitle, cuisineText, addressText}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/defaultPicture.png" />
            <Card.Body>
                <Card.Title>{restaurantTitle}</Card.Title>
                <Card.Text>
                    {cuisineText}
                    <br/>
                    {addressText}
                </Card.Text>
                <Container>
                    <Row>
                        <Col>
                            <Button className="card-buttons" variant="outline-primary">Reviews</Button>
                        </Col>
                        <Col>
                            <Button className="card-buttons" variant="outline-primary">Maps</Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default RestaurantCard;