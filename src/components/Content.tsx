import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { ISingleDayCovidData } from '../Interfaces';
import Charts from './Charts';
import DaySelect from './DaySelect';
import Loading from './Loading';

const Content = () => {
    const [state, setState] = useState({
        availableChartTypes: [
            "PieChartWithCustomizedLabel",
            "SimpleLineChart",
            "LineBarAreaComposedChart"
        ],
        chartTypes: {
            chartType1: "PieChartWithCustomizedLabel",
            chartType2: "SimpleLineChart",
            chartType3: "LineBarAreaComposedChart"
        }
    } as any);

    const [availableDays, setAvailableDays] = useState<[]>([]);
    const [data, setData] = useState<ISingleDayCovidData | null>(null);
    const [selectedDay, setSelectedDay] = useState<string | null>(null);

    const fetchData = (day: string) => {
        const escapedDate = day.substring(0,10).replaceAll('-', '_');

        fetch('https://mindtech-app-backend.herokuapp.com/api/getSpecificDay/'+ escapedDate)
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }

    useEffect(() => {
        fetch('https://mindtech-app-backend.herokuapp.com/api/getAvailableDays')
            .then(res => res.json())
            .then(data => {
                setAvailableDays(data);
                const latestDay = data.at(0);
                fetchData(latestDay);
                setSelectedDay(latestDay);
            });
    }, []);

    const onDayChange = (val: string) => {
        setSelectedDay(val);
        fetchData(val);
    }

    const onChartTypeChange = (chartNumber: number, val: string) => {
        const newChartTypes = Object.assign(
            {},
            { ...state.chartTypes },
            { ["chartType"+ chartNumber]: val }
        );

        const newState = Object.assign(
            {},
            { ...state },
            { chartTypes: newChartTypes }
        );
        
        setState(newState);
    }

    return data ? 
    (
        <Row>
            <DaySelect availableDays = { availableDays } selectedDay = { selectedDay } { ...state } onDayChange = { onDayChange } />
            <Charts data = { data } { ...state } selectedDay = { selectedDay } onChartTypeChange = { onChartTypeChange } />
        </Row>
    ) : <Loading />;
        
};

export default Content;