import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { setAsin, setModalOpen, setSelect } from "../../../../redux/reducers/bookAction";
import { fetchReview } from "../../../../redux/reducers/review";
import ModalReview from "./Modal/modal";
import "./book.css";



export default function Book({ currentBook }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelect(false));
    if (!currentBook.isSelected) {
      dispatch(setAsin(currentBook.asin));
      dispatch(setSelect(true));
    }
  };

  const handleClickReview = async () => {
    dispatch(setModalOpen(false))
    if (!currentBook.isOpen) {
      dispatch(setAsin(currentBook.asin));
      await dispatch(fetchReview(currentBook.asin));
      dispatch(setModalOpen(true));
    }
  };


  return (
    <Card className={`col-3 ${currentBook.isSelected ? "select" : "noselect"}`}>
      <Card.Img variant="top" src={currentBook.img} onClick={handleClick} />
      <Card.Body>
        <Card.Title>{currentBook.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={handleClickReview}>Review</Button>
        {
          currentBook.isOpen ? <ModalReview /> : null
        }
      </Card.Footer>
    </Card>
  );
}
