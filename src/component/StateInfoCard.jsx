import React from 'react';
import { Card } from "react-bootstrap";

export const StateInfoCard = (props) => {
    return (
        <Card className="mt-3 d-flex flex-row">
            <Card.Body>
                <Card.Title><h3>{props.state}</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted card-subtitle">{props.city}</Card.Subtitle>
                <Card.Text>
                    Population: {props.population}
                </Card.Text>
            </Card.Body>
            <Card.Img variant="top" style={{width:"130px", height:"130px"}} src={`https://openweathermap.org/img/wn/${props.weatherData?.weather[0].icon}@4x.png`} />
        </Card>
    )
}
