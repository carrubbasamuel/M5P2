import { useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCurrentPage, setSearch } from "../../../../redux/reducers/bookAction";
import "./search.css";

export default function Search() {
  const location = useLocation();
  const isLocationHome = location.pathname === '/';
  const dispatch = useDispatch();
  const search = useRef();
  const mode = useSelector((state) => state.root.modeRedux.mode);

  const handlerInput = () => {
    dispatch(setSearch(search.current.value)); // Imposta la stringa di ricerca nel redux store
    if (search.current.value === '') {
      console.log("ciao");
      dispatch(setCurrentPage(1)); // Reimposta la pagina corrente a 1 se la stringa di ricerca è vuota
    }
  };

  return (
    <div className={!isLocationHome ? "d-none" : "d-block"}>
      <InputGroup size="sm" className="p-5">
        <div className={`d-flex justify-content-center align-items-center me-1 fs-4 ${mode === 'light' ? "text-dark" : "text-light"}`}>
          <AiOutlineSearch />
        </div>
        <Form.Control
          className={mode === 'light' ? "light" : "dark"}
          ref={search}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={handlerInput}
        />
      </InputGroup>
    </div>
  );
}
