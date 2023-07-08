import { useEffect, useState } from 'react';
import { BiMessageEdit } from 'react-icons/bi';
import { RiChatDeleteLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview, fetchReview, setEditMode } from '../../../../../../../redux/reducers/review';

import Edit from './Edit/edit';
import Rating from './Rating/rating';
import './reviewcontent.css';

export default function ReviewContent({ review }) {
    const dispatch = useDispatch();
    const asin = useSelector((state) => state.root.book.asin);
    const mode = useSelector((state) => state.root.modeRedux.mode);

    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const dataString = review.createdAt;
        const data = new Date(dataString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = data.toLocaleDateString('en-US', options);
        setFormattedDate(formattedDate);
    }, [review]);

    const handleDelate = () => {
        dispatch(deleteReview(review._id)).then(() => dispatch(fetchReview(asin)));
    };

    const handleEdit = () => {
        dispatch(setEditMode({ id: review._id, editMode: true }));
    }


    return (
        <div className={`box-review ${mode === 'light' ? "light" : "dark"}`}>
            {review.editMode === true ?
                <Edit />
                :
                <div>
                    <p>{review.comment}</p>
                    <div className='d-flex justify-content-between'>
                        <Rating review={review} />
                        <p className={mode === 'light' ? "text-muted ms-4 author": "text-light ms-4 author"}>{review.author}</p>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <p>{formattedDate}</p>
                        <div className='d-flex'>
                            <button onClick={handleDelate} className='btn btn-outline-danger'><RiChatDeleteLine /></button>
                            <button onClick={handleEdit} className='btn btn-outline-success ms-2'><BiMessageEdit /></button>
                        </div>
                    </div>
                </div>}

        </div>
    );
}
