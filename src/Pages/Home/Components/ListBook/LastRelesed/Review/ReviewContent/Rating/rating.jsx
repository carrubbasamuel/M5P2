import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddRate } from '../../../../../../../../redux/reducers/review';

const Rating = ({ review }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    dispatch(setAddRate(rating));
  }, [rating, dispatch]);

  useEffect(() => {
    if (review && review.editMode === true) {
      setRating(review.rate);
    } else {
      setRating(0); // Reset rating to 0 when a new comment is added
    }
  }, [review]);

  const starStart = review ? (review.editMode ? rating : review.rate) : rating;

  return (
    <div>
      <div className={review && review.editMode ? "fs-2" : ""}>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            value={value}
            isSelected={value <= starStart}
            handleClick={() => setRating(value)}
          />
        ))}
      </div>
    </div>
  );
};

const Star = ({ isSelected, handleClick }) => {
  return (
    <span
      onClick={handleClick}
      style={{ cursor: 'pointer', color: isSelected ? 'gold' : 'gray' }}
    >
      &#9733;
    </span>
  );
};

export default Rating;
