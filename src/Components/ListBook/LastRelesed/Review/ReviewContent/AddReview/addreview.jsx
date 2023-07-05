import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormAddReview from './FormAddReview/formaddreview';

export default function AddReview() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Add Review
      </Button>

      <FormAddReview show={show} handleClose={handleClose}/>
    </>
  );
}






