import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setAsin, setModalOpen } from '../../../../../redux/reducers/bookAction';
import AddReview from './AddReview/addreview';
import ListReview from './ListReview/listreview.jsx';


export default function ModalReview() {
    const dispatch = useDispatch();
    const review = useSelector((state) => state.root.review.reviewArray);
  

    const handleShow = () => {
      dispatch(setModalOpen(false));
    };

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial'}}
    >
      <Modal.Dialog>
      <Modal.Title className='ms-3'>Review</Modal.Title>
        <Modal.Body>
            {review.length === 0 && <p>There are no reviews for this book!</p>}
            <ListReview />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleShow} variant="secondary">Close</Button>
          <AddReview />
        </Modal.Footer> 
      </Modal.Dialog>
    </div>
  );
}

