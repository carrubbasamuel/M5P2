import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TbListDetails } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAsin, setBookDetail, setSelect } from "../../../../../../redux/reducers/bookAction";
import { fetchReview, setAddButton, setOffcanvas, setReview } from "../../../../../../redux/reducers/review";
import "./book.css";

export default function Book({ currentBook }) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.root.modeRedux.mode);

  const handleClick = () => {
    dispatch(setSelect(false));
    dispatch(setAddButton(false));
    dispatch(setReview([]));
    if (!currentBook.isSelected) {
      dispatch(setAsin(currentBook.asin)); // Imposta l'asin del libro selezionato nel redux store
      dispatch(fetchReview(currentBook.asin)); // Effettua la richiesta per ottenere i commenti relativi al libro
      dispatch(setSelect(true)); // Imposta la selezione del libro a true
      if(window.innerWidth < 768){
        dispatch(setOffcanvas(true));
      }
    }
  };

  const handleDetails = () => {
    dispatch(setBookDetail(currentBook.asin)); // Imposta l'asin del libro per visualizzare i dettagli
  };

  return (
    <Col xs={9} md={4}>
      <Card className={`halo ${currentBook.isSelected ? "select" : "noselect"}`}>
        <Card.Img variant="top" src={currentBook.img} onClick={handleClick} />
        <Card.Body className={mode === 'light' ? "bg-light text-dark" : "bg-dark text-light"}>
          <Card.Title className="">{currentBook.title}</Card.Title>
          <Card.Text>Category: {currentBook.category}</Card.Text>
          <Card.Text>Price: {currentBook.price} €</Card.Text>
        </Card.Body>
        <Card.Footer className={`${mode === 'light' ? "bg-ligh border-dark" : "bg-dark border-light"} ${currentBook.isSelected ? "notdetail" : ""}`}>
          <Link to={`/book/${currentBook.asin}`}>
            <Button variant={mode === 'light' ? "outline-dark" : "outline-light"} onClick={handleDetails}>
              <TbListDetails />
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
}
