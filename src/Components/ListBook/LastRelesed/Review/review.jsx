import { useDispatch, useSelector } from 'react-redux';

export default function Review(){
    const dispatch = useDispatch();
    const review = useSelector((state) => state.root.review.reviewArray);
    console.log(review);
    return (
        <div>
            <h1>Review</h1>
            <div>
                {/* {review.map((review, index) => (
                    <div key={index}>
                        <h3>{review.elementId}</h3>
                    </div>  
                ))} */}
            </div>
        </div>
    );
}