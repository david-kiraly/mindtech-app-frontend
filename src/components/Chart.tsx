import React from 'react';
import PieChartWithCustomizedLabel from './charts/PieChartWithCustomizedLabel';

const Chart = (props: any) => {
    switch(props.chartType) {
        case "PieChartWithCustomizedLabel":
            return <PieChartWithCustomizedLabel { ...props } />;
        default:
            return null;
    }
};

export default Chart;