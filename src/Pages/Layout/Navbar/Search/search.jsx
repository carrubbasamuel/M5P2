import { useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setSearch } from "../../../../redux/reducers/bookAction";


export default function Search() {
  const location = useLocation();
  const isLocationHome = location.pathname === '/';
  const dispatch = useDispatch();
  const search = useRef();

  const handlerInput = () => {
    dispatch(setSearch(search.current.value));
  };

  return (
    <div className={!isLocationHome ? "d-none" : "d-block"}>
    <InputGroup size="sm" className="p-5">
      <InputGroup.Text id="inputGroup-sizing-sx"><AiOutlineSearch /></InputGroup.Text>
      <Form.Control
        ref={search}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        onKeyDown={handlerInput}
      />
    </InputGroup>
    </div>
  );
}
