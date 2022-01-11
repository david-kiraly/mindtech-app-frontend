import React from 'react';
import { Col, Dropdown, DropdownButton } from 'react-bootstrap';

const DaySelect = (props: any) => {
    return (
        <Col className="d-flex flex-row-reverse">
            <DropdownButton title="Choose a day" className="mt-2 mb-2" onSelect={ e => props.onDayChange(e) }>
                { props.availableDays.map((val: any, index: any) => { return <Dropdown.Item eventKey = { val } key = { index }>{ val.substring(0,10) }</Dropdown.Item> }) }
            </DropdownButton>
        </Col>
    );
};

export default DaySelect;