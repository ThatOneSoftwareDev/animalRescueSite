
//import components
import MainContainer from "@/components/MainContainer";
import Divider from "@/components/Divider";
import ButtonMediumBlack from "@/components/ButtonMediumBlack";

//next js and react import
import Image from "next/image";
import { useRouter } from "next/router";



//images
import Cats from "../../public/banner.jpg"
import SectionContainer from "@/components/SectionContainer";
import { Luckiest_Guy } from "next/font/google";
import Link from "next/link";
import ticTok from "../../public/icons/tictok.svg"
import TicTokImage from "@/components/partials/_TicTokImage";

//this is the first element on the page
const Banner = () => {


  return ( 
    <>
      <SectionContainer>
        <Image src={Cats} alt="" loading={'lazy'}/>
        <h1>GRANDMA’S HOUSE RESCUE</h1>
        <Divider/>
      </SectionContainer>
    </>
   );
}


//this is the seccond element on the page
const Paragraph = () => {
  return ( 
    <>
      <span className="paragraph">
        <p><strong>
        GRANDMA’S HOUSE RESCUE provides forever homes to farm animals in need and compassion-filled educational experiences to the public. 
        </strong></p>
        
        <p><strong>
        GRANDMA’S HOUSE RESCUE is dedicated to educating people about the injustices faced by animals and how we can better coexist with our fellow earthlings. We operate under the guiding principle that animals are our equals and deserve equal consideration for their needs and desires.
        </strong></p>
      </span>
    </>
   );
}
const LocationAndInfo = () => {
  return ( 
    <>
      <span className="LocationAndInfo">
        <p>We are a 501(C)(3) Nonprofit located in Williamsburg, VA </p>
        <Link href={''}>(click for our Guidestar info)</Link>
      </span>
    </>
   );
}
const PinkInfo = () => {

  return ( 
    <>
      <SectionContainer>
        <section className="pinkBox">
          <Paragraph/>
          <LocationAndInfo/>
          <TicTokImage/>
        </section>
        <Divider/>
      </SectionContainer>
    </>
   );
}


//this is the third element on the page
const DontateInfo = () => {

  const cashApp = "https://cash.app/$grandmashouserescue"
  const donationLevels = [
    "$45 -Feed Everyone For a Day",
    "$75 - Vet Fee for House Call",
    "$110 - Bedding for a Month",
    "$320 - Medical Implant for a Hen",
    "$950 - Hay for a Month"
  ]

  return ( 
    <>
      <section>
        <Link href={cashApp} target="_blank"><strong>Dontae</strong></Link>
        <p>​
          Thank you so much for your support!  We could not give our rescued animals their best happily-ever-afters without you!
        </p>
        <ul>
          {
            donationLevels.map((item,index)=>{
              return(
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
        <ButtonMediumBlack>Give a Happily-Ever-After</ButtonMediumBlack>
      </section>
    </>
   );
}

const ImageAndText = () => {
  return ( 
    <>
      <section>

      </section>
    </>
   );
}

const Donate = () => {
  return ( 
    <>
      <SectionContainer>
        <div className="dontateContainer">
          <DontateInfo/>
          <ImageAndText/>
        </div>
        <Divider/>
      </SectionContainer>
    </>
   );
}



export default function Home() {
  return (
    <>
      <Banner/>
      <PinkInfo/>
      <Donate/>
    </>
  );
}


