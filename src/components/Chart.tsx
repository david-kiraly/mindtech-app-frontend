import React from 'react';
import PieChartWithCustomizedLabel from './charts/PieChartWithCustomizedLabel';
import SimpleLineChart from './charts/SimpleLineChart';

const Chart = (props: any) => {
    switch(props.chartType) {
        case "PieChartWithCustomizedLabel":
            return <PieChartWithCustomizedLabel { ...props } />;
        case "SimpleLineChart":
            return <SimpleLineChart { ...props } />;
        default:
            return null;
    }
};

export default Chart;