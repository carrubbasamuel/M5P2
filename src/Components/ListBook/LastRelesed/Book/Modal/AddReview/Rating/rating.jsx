
const Rating = ({setRating, rating}) => {
  

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            value={value}
            isSelected={value <= rating}
            handleClick={handleRatingChange}
          />
        ))}
      </div>
    </div>
  );
};

const Star = ({ value, isSelected, handleClick }) => {
  return (
    <span
      onClick={() => handleClick(value)}
      style={{ cursor: 'pointer', color: isSelected ? 'gold' : 'gray' }}
    >
      &#9733;
    </span>
  );
};

export default Rating;
