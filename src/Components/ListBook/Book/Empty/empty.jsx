import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Empty() {
    return (
        <div className="d-flex flex-column align-items-center col-12">
            <FontAwesomeIcon icon={faFaceSadCry} size="10x" />
            <h1 className="text-center">No results found</h1>
        </div>
    )
}
