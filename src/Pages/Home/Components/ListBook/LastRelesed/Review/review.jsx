import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setIsMobile } from '../../../../../../redux/reducers/review';
import AsideReview from './AsideReview/asidereview';
import OffcanvasReview from './Offcanvas/offcanvas';


export default function Review() {
  const location = useLocation();
  const isLocationDetails = location.pathname.startsWith('/book/');
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.root.review.isMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        dispatch(setIsMobile(true));
      } else {
        dispatch(setIsMobile(false));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup: Rimuovi il listener quando il componente viene smontato
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  
  if(isMobile){
    if(isLocationDetails){
        return <AsideReview />
    }else{
        return <OffcanvasReview />
    }
  }else{
    return <AsideReview />
  }
}
