import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddRate } from '../../../../../../../../redux/reducers/review';


const Rating = ({ review }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    dispatch(setAddRate(rating));
  }, [rating, dispatch]);

  let isSelected;

  if (!review) {
    isSelected = rating;
  } else if (review.editMode === true) {
    isSelected = rating;
  } else {
    isSelected = review.rate;
  }

  return (
    <div>
      <div className={review && review.editMode ? "fs-2" : ""}>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            value={value}
            isSelected={value <= isSelected}
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
