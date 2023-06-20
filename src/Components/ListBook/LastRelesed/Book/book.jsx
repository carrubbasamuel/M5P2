import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './book.css';

export default function Book({ currentBook, category }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  useEffect(()=>{
    setIsSelected(false);
  },[category])
  

  return (
    <Card
      onClick={handleClick}
      className={`col-3 ${isSelected ? 'select' : 'noselect'}`}
    >
      <Card.Img variant="top" src={currentBook.img} />
      <Card.Body>
        <Card.Title>{currentBook.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
