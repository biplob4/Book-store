import React from 'react';
import { Col, Row } from 'react-bootstrap';
import book from '../img/book.png';
import './Home.css'

const Home = () => {
    return (
        <div className='book'>
            <Row xs={1} md={2} className="m-auto container-xl">
                <Col className="title">
                    <div className="mt-5">
                    <h1>You can read the first two pages of this book for free</h1>
                    <p>Nothing else can compare with a book.Reading books makes you feel good, so buy and read the book of your choice......</p>
                    </div>
                    <a href=""> <span></span> Read-More</a>
                </Col>
                <Col className="">
                    <img src={book}/>
                </Col>
            </Row>
        </div>
    );
};

export default Home;