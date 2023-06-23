import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Rating from "./Rating/rating";
import "./addreview.css";



export default function AddReview({ handleClickReview, show, postReview, asin }) {
    const text = useRef();
    const [rating, setRating] = useState(0);

    useEffect(()=>{
        setRating(0);
    },[show])

    const handleSave = ()=>{
        const newReview = {
            comment: text.current.value,
            rate: rating,
            elementId: asin
        }
        postReview(newReview);
        handleClickReview();
    }

  if (!show) {
    return (
      <Button variant="primary" onClick={handleClickReview}>
        Add Review
      </Button>
    );
  }
  return (
    <Modal show={show} className="modale">
      <Modal.Header onClick={handleClickReview} closeButton>
        <Modal.Title>Add new review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Text>Write your review:</InputGroup.Text>
          <Form.Control ref={text} as="textarea" aria-label="With textarea" />
        </InputGroup>
        <InputGroup className="ratingMod">
          <Rating rating={rating} setRating={setRating} />
        </InputGroup>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClickReview} variant="secondary">Close</Button>
        <Button onClick={handleSave} variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}
