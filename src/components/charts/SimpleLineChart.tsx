import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ISingleDayCovidData } from '../../Interfaces';


const SimpleLineChart = (props: any) => {

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
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SimpleLineChart;