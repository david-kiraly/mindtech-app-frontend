import React from 'react';
import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';

  import { ISingleDayCovidData } from '../../Interfaces';

const LineBarAreaComposedChart = (props: any) => {

    const dayData: ISingleDayCovidData = props.data;

    const data = [
        { name: 'infected', value: dayData.infected },
        { name: 'deceased', value: dayData.deceased },
        { name: 'recovered', value: dayData.recovered },
        { name: 'quarantined', value: dayData.quarantined },
        { name: 'tested', value: dayData.tested }
    ];

    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
            <ComposedChart
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
                >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" barSize={20} fill="#413ea0" />
            </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineBarAreaComposedChart;