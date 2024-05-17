'use client'
import Footer from "@/components/Footer";
import MediaAnimals from "@/components/partials/_MasonryAnimals";
import { useEffect } from "react";



const Banner = () => {
  return ( 
    <>
      <main className="bannerAnimalsPage">
        <h6>Meet Our Animals</h6>
      </main>
    </>
   );
}




const AnimalsPage = () => {


    return ( 
        <>
            <Banner/>
              <section className="videos">
                <MediaAnimals/>
              </section>
            <Footer/>
        </>
     );
}
 
export default AnimalsPage;










