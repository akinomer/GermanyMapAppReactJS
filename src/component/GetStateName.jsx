import React, { useMemo, useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import SelectHour from "./SelectHour";
import WeatherCastShowCard from "./WeatherCastShowCard";
import { DeStates } from "../json/de";
import { fetchDataFromWeatherApi } from "../service/WeatherService";
import { StateInfoCard } from "./StateInfoCard";
import { Row, Col } from "react-bootstrap";

const GetStateName = ({ stateName }) => {

    const getCoordinates = useMemo(() => {
        const coordinates = DeStates.find(element => element.admin_name === stateName);
        if (coordinates) {
            let nf = Intl.NumberFormat();
            return {
                lat: coordinates.lat,
                lng: coordinates.lng,
                city: coordinates.city,
                population: nf.format(coordinates.population),
                state: stateName
            };
        }
        return { lat: null, lng: null, city: null, population: null, state: null };
    }, [stateName])


    const [weatherResponse, setWeatherResponse] = useState({});

    useEffect(() => {
        const response = fetchDataFromWeatherApi(
            {
                lat: getCoordinates.lat,
                lng: getCoordinates.lng
            }
        );
        response.then(data => {
            setWeatherResponse(data);
        }).catch(err => {
            console.log(err);
        });
    }, [getCoordinates.lat, getCoordinates.lng]);

    const sliderValue = useSelector(state => state.slider.value);
 
    return (
        <>
            <Row>
                <Col md={12}>
                    <StateInfoCard population={getCoordinates.population}
                        state={getCoordinates.state}
                        weatherData={weatherResponse.data?.list[sliderValue - 1]}
                        city={getCoordinates.city} />
                </Col>
                <Col>
                    <div className="mt-3 card" style={{ padding: "2rem" }}>
                        {
                            (weatherResponse.data) ? <SelectHour Steps={weatherResponse.data} /> : ""
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <div>
                    {
                        (weatherResponse.data) ?
                            <WeatherCastShowCard
                                population={getCoordinates.population}
                                state={getCoordinates.state}
                                weatherData={weatherResponse.data.list[sliderValue - 1]}
                                city={getCoordinates.city}
                            /> :
                            <p>There is no data</p>
                    }
                </div>
            </Row>
        </>
    )
}

export default GetStateName;
