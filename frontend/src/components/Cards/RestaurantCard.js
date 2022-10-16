import {Button, Card, Container, Row, Col} from "react-bootstrap";

const RestaurantCard = ({restaurantTitle, cuisineText, addressText}) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Header as="h5">{restaurantTitle}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {cuisineText}
                </Card.Text>
                <Card.Text>
                    {addressText}
                </Card.Text>
                <Container>
                    <Row>
                        <Col>
                            <Button variant="outline-primary">Reviews</Button>
                        </Col>
                        <Col>
                            <Button variant="outline-primary">Maps</Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default RestaurantCard;