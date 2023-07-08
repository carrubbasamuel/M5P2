import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsEmojiExpressionless } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setSelect } from '../../../../../../../redux/reducers/bookAction';
import { setAddButton, setOffcanvas, setReview } from '../../../../../../../redux/reducers/review';
import AddReview from '../ReviewContent/AddReview/addreview';
import ReviewContent from '../ReviewContent/reviewcontent';
import './offcanvas.css';


export default function OffcanvasReview() {
  const dispatch = useDispatch();
  const offcanvas = useSelector((state) => state.root.review.offcanvas);
  const { reviewArray, Loading } = useSelector((state) => state.root.review);
  const mode = useSelector((state) => state.root.modeRedux.mode);

  const handleClose = () => {
    dispatch(setOffcanvas(false));
    dispatch(setSelect(false))
    dispatch(setAddButton(false));
    dispatch(setReview([]));
  };


  return (
    <>

      <Offcanvas show={offcanvas} onHide={handleClose} className={mode === 'light' ? "bg-light text-dark" : "bg-dark text-light"}>
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>Reviews...</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column align-items-center' >
        <AddReview />
          {Loading === false && reviewArray && reviewArray.map((review) => (
            <ReviewContent key={review._id} review={review} />
          ))}
          {Loading === true ? <div className="spinner-border text-secondary" role="status"></div> : null}
          
          {Loading === false && reviewArray.length === 0 &&
            <div className='d-flex flex-column align-items-center justify-content-center'>
              
              <p className='fs-1 mt-5'>No reviews</p>
              <div className='canvas'>
                <BsEmojiExpressionless />
                <h3 className='text-center'>Be the first to write a review</h3>
               
              </div>
             
            </div>}
            
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
