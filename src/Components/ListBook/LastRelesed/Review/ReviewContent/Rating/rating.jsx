import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddRate } from '../../../../../../redux/reducers/review';


const Rating = ({ rate }) => {
  const dispatch = useDispatch();
  const [rateing , setRateing] = useState(0);

  useEffect(() => {
    dispatch(setAddRate(rateing));
  }, [rateing, dispatch]);

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            value={value}
            isSelected={value <= rate || value <= rateing}
            handleClick={() => setRateing(value)}
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
