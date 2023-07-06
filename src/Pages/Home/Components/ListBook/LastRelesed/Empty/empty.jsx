import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";


export default function Empty() {
    const mode = useSelector((state) => state.root.modeRedux.mode);
    return (
        <div className={`d-flex flex-column align-items-center col-12 ${mode === 'light' ? "text-dark" : "text-light"}`}>
            <FontAwesomeIcon icon={faFaceSadCry} size="10x" />
            <h1 className={`text-center ${mode === 'light' ? "text-dark" : "text-light"}`}>No results found</h1>
        </div>
    )
}
