import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import FormAddReview from './FormAddReview/formaddreview';

export default function AddReview() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mode = useSelector((state) => state.root.modeRedux.mode);



  return (
    <>
      <Button variant={mode === 'light' ? "outline-dark" : "outline-light"} onClick={handleShow}>
        Add Review
      </Button>

      <FormAddReview show={show} handleClose={handleClose}/>
    </>
  );
}






