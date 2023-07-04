import Rating from './Rating/rating';
import './reviewcontent.css';

export default function ReviewContent({ review }) {

    return (
        <div className='box-review'>
            <p>{review.comment}</p>
            <div className='d-flex justify-content-between'>
                <Rating rate={review.rate}/>
                <p className='ms-5'>{review.author}</p>
            </div>
        </div>


    );
}