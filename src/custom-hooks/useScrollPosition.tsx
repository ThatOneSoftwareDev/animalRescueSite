import { useEffect, useState } from "react"



export const useScrollPosition = (delay = 50) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let timeoutId : NodeJS.Timeout;

    const updatePosition = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrollPosition(window.scrollY);
      }, delay);
    };

    window.addEventListener("scroll", updatePosition);

    // Initial position update
    updatePosition();

    return () => {
      window.removeEventListener("scroll", updatePosition);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return scrollPosition;
};



// export const useScrollPosition = () => {
//     const [scrollPosition, setScrollPosition] = useState(0)
  
//     useEffect(() => {
//       const updatePosition = () => {
//         setScrollPosition(window.scrollY)
//       }
  
//       window.addEventListener('scroll', updatePosition)
  
//       updatePosition()
  
//       return () => window.removeEventListener('scroll', updatePosition)
//     }, [])
  
//     return scrollPosition
// }


