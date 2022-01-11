import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ChartCard = (props: any) => {
    return (
        <Col xs={12} lg={6} xxl={4}>
            <Card className="mb-4">
                <Card.Header>Cases on { props.selectedDay.substring(0,10) }</Card.Header>
                <Card.Body>
                    <Row>
                        <Col className="d-flex flex-row-reverse mb-3">
                            <DropdownButton title="Chart type" onSelect={ e => props.onChartTypeChange(props.chartNumber, e) }>
                                { props.availableChartTypes.map((val: any, index: any) => { return <Dropdown.Item eventKey = { val } key = { index }>{ val }</Dropdown.Item> }) }
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Chart
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChartCard;