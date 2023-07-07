import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchReview } from "../../redux/reducers/review"
import Review from "../Home/Components/ListBook/LastRelesed/Review/review"
import Layout from "../Layout/layout"
import './detailspage.css'


export default function DetailsPage() {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.root.modeRedux.mode)

    const book = useSelector(state => state.root.book.BookDeteil);

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchReview(book.asin))
    }, [book, dispatch])

    return (
        <Layout>
        <main className={`row box ${mode === 'light' ? 'text-dark': 'text-light'}`}>
          <div className="col-4">
            <img className="img-fluid" src={book.img} alt="" />
          </div>
          <div className="col-5">
            <div className="d-flex flex-column ">
              <p className="fs-3 text-end pt-4">{book.title}</p>
              <p className="fs-3 text-end pt-4">Category: <span className="text-success">{book.category}</span></p>
              <p className="fs-1 text-end pt-4">{book.price} €</p>
              <Review />
            </div>
          </div>
        </main>
      </Layout>
      
    )
}