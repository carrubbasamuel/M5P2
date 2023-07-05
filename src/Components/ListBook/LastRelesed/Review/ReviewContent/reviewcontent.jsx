import { useEffect, useState } from 'react';
import Rating from './Rating/rating';
import './reviewcontent.css';

export default function ReviewContent({ review }) {
    const [formattedDate, setFormattedDate] = useState('');


    //Format Data from API
    useEffect(() => {
        const dataString = review.createdAt;
        const data = new Date(dataString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = data.toLocaleDateString('en-US', options);
        setFormattedDate(formattedDate);
    }, [review]);

    return (
        <div className='box-review'>
            <p>{review.comment}</p>
            <div className='d-flex justify-content-between'>
                <Rating rate={review.rate}/>
                <p className='ms-5 text-muted'>{review.author}</p>
            </div>
            <hr />
            <p>{formattedDate}</p>
        </div>
    );
}
