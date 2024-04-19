
//import components
import MainContainer from "@/components/MainContainer";

//next js and react import
import Image from "next/image";

//images
import Cats from "../../public/Animal-Picture-Temp/cats.jpg"



const Banner = () => {
  return ( 
    <>
      <section className="banner">
        <Image src={Cats} alt="" loading={'lazy'}/>
        <h1>GRANDMA’S HOUSE RESCUE</h1>
        <span className="line sectionDivider"></span>
      </section>
    </>
   );
}

const ScocialProof = () => {
  return ( 
    <>
      
    </>
   );
}


export default function Home() {
  return (
    <>
      <Banner/>
      <ScocialProof/>
    </>
  );
}


