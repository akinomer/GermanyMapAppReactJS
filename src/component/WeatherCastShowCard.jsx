import { Card, Row, Col, ListGroup } from "react-bootstrap";

const WeatherCastShowCard = (props) => {
    return (
      <>
        <Row>
            <Col md={12}>
                <Card className="mt-3">
               
                    <Card.Header><small>Temp</small></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Min {props.weatherData.main.temp_min}° | Max {props.weatherData.main.temp_max}°</ListGroup.Item>
                        <ListGroup.Item>Feel Like {props.weatherData.main.feels_like}°</ListGroup.Item>
                    </ListGroup>
                    <Card.Header><small>Description</small></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{props.weatherData.weather[0].main} <small><b>{props.weatherData.weather[0].description}</b></small></ListGroup.Item>
                    </ListGroup>
                    <Card.Header><small>Humidity</small></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{props.weatherData.main.humidity}%</ListGroup.Item>
                    </ListGroup>
                    <Card.Header><small>Wind</small></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{props.weatherData.wind.speed}</ListGroup.Item>
                        <ListGroup.Item>Degree {props.weatherData.wind.deg}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        
      </>
    )
}

export default WeatherCastShowCard;