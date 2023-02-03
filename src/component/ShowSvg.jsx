import { useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import GetStateName from "./GetStateName";
import { ReactComponent as SvgMap } from "../svg/germanyLow.svg";

const ShowSvg = () => {

    const [stateName, setStateName] = useState("");


    // handle state name when click on map
    const handleMapClick = (e) => {
        const selectedActiveMapElement = document.querySelector(".active");

        selectedActiveMapElement?.classList.remove("active");
        setStateName(e.target.getAttribute("title"));
        e.target.classList.add("active");
    }

    return (
        <Container fluid className="mt-3 mb-3">
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <Card className="mt-3">
                        <Card.Body>
                            <Card.Title>
                                <h3>Germany</h3>
                            </Card.Title>
                            <Card.Subtitle>
                                <p>Click on a state to get the name and coordinates</p>
                            </Card.Subtitle>
                            <Card.Text className="overflow-scroll">
                                <SvgMap className="svgSize" onClick={handleMapClick} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={8} >
                    {
                        (stateName === "" || stateName === null)
                            ? ""
                            : (<GetStateName stateName={stateName} />)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default ShowSvg;