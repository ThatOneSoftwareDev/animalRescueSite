
//import components
import MainContainer from "@/components/MainContainer";
import Divider from "@/components/Divider";

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
        <Divider/>
      </section>
    </>
   );
}



export default function Home() {
  return (
    <>
      <Banner/>
    </>
  );
}


