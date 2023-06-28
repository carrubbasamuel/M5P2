import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddRate } from '../../../../../../../redux/reducers/review';


const Rating = ({ rate }) => {
  const dispatch = useDispatch();
  const ratingVs = useSelector((state) => state.root.review.addRate);

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            value={value}
            isSelected={value <= rate || value <= ratingVs}
            handleClick={() => dispatch(setAddRate(value))}
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
