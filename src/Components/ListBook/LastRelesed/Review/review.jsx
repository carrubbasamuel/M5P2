
import { BsEmojiExpressionless } from 'react-icons/bs';
import { TbHandClick } from 'react-icons/tb';

import { useSelector } from 'react-redux';


import AddReview from './ReviewContent/AddReview/addreview';
import ReviewContent from './ReviewContent/reviewcontent';
import './review.css';

export default function Review() {
    const { reviewArray, Loading, StateAddButton } = useSelector((state) => state.root.review);
    const mode = useSelector((state) => state.root.modeRedux.mode);




    return (
        <aside className='col-5 d-flex flex-column justify-content-center align-items-center'>
            <div className={`boxReview mb-5 ${mode === 'light' ? "text-dark" : "text-light"}`}>
                {Loading === true ? <div className="spinner-border text-secondary" role="status"></div> : null}
                <div className={`d-flex flex-column justify-content-center align-items-center mt-5 pt-5 ${reviewArray.length > 0 || Loading === true || StateAddButton === true ? "d-none" : "d-block"}`}>
                    <TbHandClick className='fs-2 mb-4' />
                    <p>Click into any book to see, or add, reviws...</p>
                </div>
                <div className='mt-5 pt-5 '>
                    {reviewArray.length === 0 && StateAddButton === true && Loading === false ?
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <BsEmojiExpressionless className="fs-1 mb-3" />
                            <p className="fs-4">No reviews yet</p>
                            <p className="fs-6">Be the first to review this book!</p>
                        </div> : null}
                    {Loading === false && reviewArray && reviewArray.map((review, index) => (
                        <div key={index}>
                            <ReviewContent review={review} />
                        </div>
                    ))}
                </div>
            </div>
            {Loading === false && StateAddButton === true ? <AddReview /> : null}

        </aside>
    );

}