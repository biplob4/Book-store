import { AreaChart, BarChart, CartesianGrid, ComposedChart, Legend,Tooltip } from 'recharts';
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

            <Row xs={1} md={2} className="m-auto">
                <div className='mb-5'>
                    <LineChart width={550} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div className='mb-5'>
                    <BarChart width={550} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar type="monotone" dataKey="revenue" fill="#8884d8" />
                        <Bar type="monotone" dataKey="sell" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className='mb-5'>
                    <AreaChart
                        width={550}
                        height={250}
                        data={data}
                    >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Area dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                        <Area dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                        <Tooltip />
                    </AreaChart>
                </div>
                <div className='mb-5'>
                    <ComposedChart width={550} height={250} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="investment" fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </Row>

        </div >
    );
};

export default Dashboard;