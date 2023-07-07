import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setAddButton, setReview } from "../../redux/reducers/review.js";
import Layout from "../Layout/layout.jsx";
import CarouselBook from "./Components/Carousel/carousel.jsx";
import DropGenre from "./Components/DropGenre/dropgenre.jsx";
import ListBook from "./Components/ListBook/listbook.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolla la pagina in cima quando si cambia la posizione
    dispatch(setReview([])); // Imposta l'array dei commenti a vuoto
    dispatch(setAddButton(false)); // Imposta il pulsante di aggiunta a false
  }, [pathname, dispatch]);

  return (
    <Layout>
      <CarouselBook />
      <DropGenre />
      <ListBook />
    </Layout>
  );
}
