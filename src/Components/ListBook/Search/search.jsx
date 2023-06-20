import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Search({ setSearch }) {
  
  const handlerInput = () => {
    let input = document.getElementById("search").value;
    setSearch(input);
  };

  return (
    <InputGroup size="sm" className="p-5">
      <InputGroup.Text id="inputGroup-sizing-sm">Search </InputGroup.Text>
      <Form.Control
        id="search"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        onChange={handlerInput}
      />
    </InputGroup>
  );
}
