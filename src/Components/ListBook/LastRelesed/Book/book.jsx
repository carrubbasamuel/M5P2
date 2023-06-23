import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ModalReview from "./Modal/modal";
import "./book.css";

export default function Book({ currentBook, category, currentPage }) {

  const [show, setShow] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //Toggle for select book
  const handleClick = () => {
    setIsSelected(!isSelected);
    setShow(false);
   isSelected ? setIsOpen(false) : setIsOpen(true);
  };

  //Toggle modal Review
  const handleToggleReview = () => {
    setIsLoading(true);
    setIsOpen(true);
    setTimeout(() => {
      setShow(!show);
      setIsLoading(false);
    }, 1000);
  };

  //Refres component
  useEffect(() => {
    setIsSelected(false);
    setShow(false);
    setIsOpen(false);
  }, [category, currentPage]);

  return (
    <Card className={`col-3 ${isSelected ? "select" : "noselect"}`}>
      <Card.Img onClick={handleClick} variant="top" src={currentBook.img} />
      <Card.Body>
        <Card.Title>{currentBook.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <button onClick={handleToggleReview} className={`btn btn-primary ${isOpen ? "d-none" : "d-block"}`}>
          Review
        </button>
        {isLoading &&
          <Spinner
            animation="border"
            variant="primary"
          />
        }
        {show && (
          <ModalReview
            asin={currentBook.asin}
            setShow={setShow}
            setIsOpen={setIsOpen}

          />
        )}
      </Card.Footer>
    </Card>
  );
}
