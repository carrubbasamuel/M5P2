import { TbHandClick } from 'react-icons/tb';
import { useSelector } from 'react-redux';

import AddReview from './ReviewContent/AddReview/addreview';
import ReviewContent from './ReviewContent/reviewcontent';
import './review.css';

export default function Review() {
    const review = useSelector((state) => state.root.review.reviewArray);
    const loading = useSelector((state) => state.root.review.loading);
    const open = useSelector((state) => state.root.review.stateAddbutton);

    return (
        <aside className='col-4 d-flex flex-column justify-content-center align-items-center'>
            <div className='boxReview mb-5'>
                {loading === true ? <div className="spinner-border text-secondary" role="status"></div> : null}
                <div className={`d-flex flex-column justify-content-center align-items-center mt-5 pt-5 ${review.length > 0 || loading === true ? "d-none" : "d-block"}`}>
                    <TbHandClick className='fs-2 mb-4' />
                    <p>Click into any book to see, or add, reviws...</p>
                </div>
                <div className='mt-5 pt-5'>
                    {review.map((review, index) => (
                        <div key={index}>
                            <ReviewContent review={review} />
                        </div>
                    ))}
                </div>
            </div>
            {open === true ? <AddReview className="mt-5 p-5" /> : null}
        </aside>
    );
}