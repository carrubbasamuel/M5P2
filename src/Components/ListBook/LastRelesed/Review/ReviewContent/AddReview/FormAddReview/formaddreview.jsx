import React, { useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReview, postReview } from '../../../../../../../redux/reducers/review';
import Rating from '../../Rating/rating';

export default function FormAddReview({ show, handleClose }) {

    const dispatch = useDispatch();
    const text = useRef();
    const rating = useSelector((state) => state.root.review.StateRating);
    const asin = useSelector((state) => state.root.book.asin);

    const handleSave = () => {
        const newReview = {
            comment: text.current.value,
            rate: rating,
            elementId: asin
        }
        dispatch(postReview(newReview)).then(() => dispatch(fetchReview(asin)));
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add your review...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                    <textarea ref={text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='d-flex justify-content-center fs-1'>
                    <Rating />
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}