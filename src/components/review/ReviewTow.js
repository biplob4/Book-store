import React from 'react';
import './Review.css'

const ReviewTow = ({ reviews }) => {
    const { comment, avatar, username, review, email } = reviews;
    return (
        <div className="review-container">
            <div className='mb-5'>
                <img src={avatar} alt="img" />
                <h5>{username}</h5>
                <p>{comment}</p>
                <div className="review">
                    <h6>{email}</h6>
                    <h6>Ratting: {review}</h6>
                </div>
            </div>
        </div>
    );
};

export default ReviewTow;