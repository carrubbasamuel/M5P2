import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddReview from './AddReview/addreview.jsx';
import ListReview from './ListReview/listreview.jsx';

export default function ModalReview({ asin, setShow, setIsOpen }) {
    const[review, setReview] = useState([]);
    const[showAdded, setShowAdded] = useState(false);//*per altro modale

    const handleClickReview = ()=>{
        setShowAdded(!showAdded);
    }

    const endPointPost = `https://striveschool-api.herokuapp.com/api/comments/`
    const endpoint = `https://striveschool-api.herokuapp.com/api/comments/${asin}`
    const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlM2MxNmI5YzBmNzAwMTQ0ODRlZDgiLCJpYXQiOjE2ODc1NDI0MzEsImV4cCI6MTY4ODc1MjAzMX0.d6MQUWUpdusXGvNd72LzIvVPzs6OxCfRXI1iQkTjhy8"
   
    useEffect(()=>{
        fetch(endpoint, {
            method: "GET",
            headers: {
                "Authorization": key
            }
        })
        .then(response => response.json())
        .then(data => {console.log(data);setReview(data)})
        .catch(err => console.log(err))
    },[])

    const postReview = async (review) => {
        try{
            const response = await fetch(endPointPost, {
                method: "POST",
                body: JSON.stringify(review),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": key
                }
            })
            if(response.ok){
                setShow(false)
                setIsOpen(false)
            }
        }catch(err){
            console.log(err)
        }
    }


  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial'}}
    >
      <Modal.Dialog>
      <Modal.Title className='ms-3'>Review</Modal.Title>
        <Modal.Body style={{pointerEvents: 'none'}}>
            {review.length === 0 && <p>There are no reviews for this book!</p>}
            <ListReview review={review}/>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={()=> {setShow(false); setIsOpen(false)}} variant="secondary">Close</Button>
          <AddReview asin={asin} show={showAdded} postReview={postReview} handleClickReview={handleClickReview}/>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

