import { useEffect, useRef, useState } from "react";
import lazyCardStyles from './LazyCard.module.css';
import { Card } from '../Card/Card';
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

const LazyCard = (props) => {
    const [isShown, toggleShown] = useState();
    const trigger = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const isShowing = entries[0]?.isIntersecting;
        setTimeout(()=>{
          if (isShowing) {
            toggleShown(true);
          }
        }, 500)
      });
  
      observer.observe(trigger.current);
      return () => {
        observer?.disconnect();
      };
    }, []);
  
    return isShown ? (<Card {...props} />) : (<div className={lazyCardStyles.trigger} ref={trigger}><CardSkeleton /></div>);
  };
  
  export { LazyCard };