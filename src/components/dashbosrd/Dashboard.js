import { BarChart, CartesianGrid, Tooltip } from 'recharts';
import React, { useEffect, useState } from 'react';
import { Area, Bar, Line, LineChart, XAxis, YAxis } from 'recharts';
import { Row } from 'react-bootstrap';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="mt-5 container-xl">
            
                <Row xs={1} md={2}>
                <div>
                    <LineChart width={700} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                    </LineChart>
            </div>
            <div>
                <BarChart width={700} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar type="monotone" dataKey="revenue" fill="#8884d8" />
                    <Bar type="monotone" dataKey="sell" fill="#82ca9d" />
                </BarChart>
            </div>
            <Row></Row>
        
        </div >
    );
};

export default Dashboard;