import React from 'react';
import PieChartWithCustomizedLabel from './charts/PieChartWithCustomizedLabel';
import SimpleLineChart from './charts/SimpleLineChart';
import LineBarAreaComposedChart from './charts/LineBarAreaComposedChart';

const Chart = (props: any) => {
    switch(props.chartType) {
        case "PieChartWithCustomizedLabel":
            return <PieChartWithCustomizedLabel { ...props } />;
        case "SimpleLineChart":
            return <SimpleLineChart { ...props } />;
        case "LineBarAreaComposedChart":
            return <LineBarAreaComposedChart { ...props } />;
        default:
            return null;
    }
};

export default Chart;