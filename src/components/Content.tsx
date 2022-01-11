import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

const Content = () => {
    const [state, setState] = useState({} as any);

    const [availableDays, setAvailableDays] = useState([]);
    const [data, setData] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);

    const fetchData = (day: string) => {
        const escapedDate = day.substring(0,10).replaceAll('-', '_');

        fetch('http://localhost:8000/api/getSpecificDay/'+ escapedDate)
            .then(res => res.json())
            .then(data => {
                setData(data);
            });
    }

    useEffect(() => {
        fetch('http://localhost:8000/api/getAvailableDays')
            .then(res => res.json())
            .then(data => {
                setAvailableDays(data);
                const latestDay = data.at(0);
                fetchData(latestDay);
                setSelectedDay(latestDay);
            });
    }, []);

    return data ? 
    (
        <Row>
            
        </Row>
    ) : <></>;
        
};

export default Content;