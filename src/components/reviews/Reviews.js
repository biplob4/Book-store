import React from 'react';
import { Row } from 'react-bootstrap';
import UseReview from '../../hook/UseReview';
import ReviewTow from '../review/ReviewTow';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = UseReview([]);
    return (
        <div className='container-xl'>
            <Row xs={1} md={3} className='text-center review-container mt-5 allImg'>
                {
                    reviews.map(review => <ReviewTow key={review.id} reviews={review}></ReviewTow>)
                }
            </Row>
        </div>
    );
};

export default Reviews;