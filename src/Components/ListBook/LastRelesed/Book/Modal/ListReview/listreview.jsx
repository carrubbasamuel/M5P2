import { useSelector } from "react-redux";
import Rating from "../AddReview/Rating/rating";
import "./listreview.css";
import { useEffect } from "react";

export default function ListReview() {
    const review = useSelector((state) => state.root.review.reviewArray);
    const slice = review.slice(0, 3);


    return (
        <>
        {
            slice.map((reviewItem, index) => (
                <div key={index}>
                    <p>{reviewItem.comment}</p>
                    <div className="d-flex justify-content-between">
                         <Rating rate={reviewItem.rate}/> 
                        <p className="autore">{reviewItem.author}</p>
                    </div>
                </div>
            ))
        }
        </>
    );
}
