import React from 'react';
import { Row } from 'react-bootstrap';
import ChartCard from './ChartCard';

const Charts = (props: any) => {
    return (
        <Row>
            <ChartCard { ...props } chartNumber = "1" onChartTypeChange = { props.onChartTypeChange } />
            <ChartCard { ...props } chartNumber = "2" onChartTypeChange = { props.onChartTypeChange } />
            <ChartCard { ...props } chartNumber = "3" onChartTypeChange = { props.onChartTypeChange } />
        </Row>
    );
};

export default Charts;