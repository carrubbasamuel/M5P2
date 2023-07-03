import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReview, setAddReviewOpen } from "../../../../../../redux/reducers/review";


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Rating from "./Rating/rating";
import "./addreview.css";



export default function AddReview() {
    const dispatch = useDispatch();
    const text = useRef();
    const isAddReviewOpen = useSelector((state) => state.root.review.isAddReviewOpen);
    const rating = useSelector((state) => state.root.review.addRate);
    const asin = useSelector((state) => state.root.book.asin);

    const handleSave = ()=>{
        const newReview = {
            comment: text.current.value,
            rate: rating,
            elementId: asin
        }
        dispatch(postReview(newReview));
    }  

  if (!isAddReviewOpen) {
    return (
      <Button onClick={()=> dispatch(setAddReviewOpen())} variant="outline-secondary">
        Add Review
      </Button>
    );
  }
  return (
    <Modal show={isAddReviewOpen} className="modale">
      <Modal.Header onClick={()=>dispatch(setAddReviewOpen())} closeButton>
        <Modal.Title>Add new review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Text>Write your review:</InputGroup.Text>
          <Form.Control ref={text} as="textarea" aria-label="With textarea" />
        </InputGroup>
        <InputGroup className="ratingMod">
          <Rating  /> 
        </InputGroup>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>dispatch(setAddReviewOpen())} variant="secondary">Close</Button>
        <Button onClick={handleSave}  variant="outline-secondary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}
