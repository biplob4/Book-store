import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseReview from '../../hook/UseReview';
import book from '../img/book.png';
import ReviewTow from '../review/ReviewTow';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = UseReview([]);
    return (
        <div className='book container-xl '>
            <Row xs={1} md={2} className="m-auto">
                <Col className="title">
                    <div className="mt-5">
                        <h1>You can read the first two pages of this book for free</h1>
                        <p>Nothing else can compare with a book.Reading books makes you feel good, so buy and read the book of your choice......</p>
                    </div>
                    <a className='btn'> <span></span> Read-More</a>
                </Col>
                <Col className="">
                    <img src={book} />
                </Col>
            </Row>
            <Row xs={1} md={3} className='text-center review-container mt-5'>
                {
                    reviews.slice(0, 3).map(review => <ReviewTow key={review.id} reviews={review}></ReviewTow>)
                }
            </Row>
            <Link to="/reviews" className='btn mt-5 btn2' ><span></span> See-All</Link>
        </div>
    );
};

export default Home;