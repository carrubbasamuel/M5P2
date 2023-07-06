import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"
import Layout from "../Layout/layout"
export default function DetailsPage(){

    const book = useSelector(state => state.root.book.detailsBook)
    console.log(book)
    
    return(
        <Layout>
        <div className="w-25">
            <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.category}
                    </Card.Text>
                    <Card.Text>
                        {book.price}
                    </Card.Text>
                    <Card.Text>
                        {book.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </Layout>
    )
}