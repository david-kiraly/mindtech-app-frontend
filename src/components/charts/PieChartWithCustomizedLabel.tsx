import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ISingleDayCovidData } from '../../Interfaces';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#1ea11b'];

const PieChartWithCustomizedLabel = (props: any) => {

    const dayData: ISingleDayCovidData = props.data;

    const data = [
        { name: 'infected', value: dayData.infected },
        { name: 'deceased', value: dayData.deceased },
        { name: 'recovered', value: dayData.recovered },
        { name: 'quarantined', value: dayData.quarantined },
        { name: 'tested', value: dayData.tested }
    ];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {data[index].name +': '+`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieChartWithCustomizedLabel;