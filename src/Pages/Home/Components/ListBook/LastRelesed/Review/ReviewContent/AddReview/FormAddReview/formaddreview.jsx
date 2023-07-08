import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GoAlert } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReview, postReview } from '../../../../../../../../../redux/reducers/review';
import Rating from '../../Rating/rating';
import './formaddreview.css';

export default function FormAddReview({ show, handleClose }) {
    const [allert, setAllert] = useState(false);

    const dispatch = useDispatch();
    const text = useRef();
    const rating = useSelector((state) => state.root.review.StateRating);
    const asin = useSelector((state) => state.root.book.asin);

    useEffect(() => {
        setAllert(false);
    }, [show]);

    const handleSave = () => {
        if(text.current.value === '' || rating === 0) return setAllert(true);
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
                {allert && <div className="alert alert-danger mt-2 d-flex align-items-center" role="alert"><GoAlert className='me-3' /> Write a commen and insert a rate! </div>}
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                    <textarea defaultValue={""} ref={text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='d-flex justify-content-center fs-1'>
                    <Rating />
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="ouline-secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}