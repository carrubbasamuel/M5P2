import Rating from "../AddReview/Rating/rating";
import "./listreview.css";

export default function ListReview({ review }) {
    const slice = review.slice(0, 3);

    return (
        <>
        {
            slice.map((review, index) => (
                <div key={index}>
                    <p>{review.comment}</p>
                    <div className="d-flex justify-content-between">
                        <Rating rating={review.rate} />
                        <p className="autore">{review.author}</p>
                    </div>
                    
                </div>
            ))
        }
        
        </>

    );
}