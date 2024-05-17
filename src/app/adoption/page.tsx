'use client'
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import SectionContainer from "@/components/SectionContainer";
import AdoptionInfoArray, { AdoptionProcessArray } from "@/tempData/AdoptionInfo";
import { FilloutStandardEmbed } from "@fillout/react";


const Banner = () => {
    return ( 
        <>
            <main className="adoptionSection1">
                <main className="bannerAdoptionInfoPage">

                </main>
                <h1>Adopt an animal today!</h1>
                <Divider/>
            </main>
        </>
     );
}


interface AdoptionInfoPartialProps{
    title:string,
    description:string
}
const AdoptionPartial = ({
    title,
    description
}:AdoptionInfoPartialProps) => {
    return ( 
        <>
            <p>
                <strong>
                    {title}: 
                </strong>
                {description}
            </p>
        </>
     );
}
const AdoptionInfo = () => {
    return ( 
        <>
            <SectionContainer>
                <main className="adoption">
                    <h2>Adoption Application Information</h2>
                    <p>
                        Thank you for your interest in adopting a dog from our shelter. We take the adoption process very seriously to ensure the best possible match between our dogs and their new families. To that end, we have a thorough application process that includes the following requirements: 
                    </p>
                    <h4>To be eligible for dog adoption, you must meet the following criteria</h4>
                    {
                        AdoptionInfoArray.map((item,index)=>{
                            return(
                                <AdoptionPartial title={item.title} description={item.description} key={index}/>
                            )
                        })
                    }
                </main>
                <Divider/>
            </SectionContainer>
        </>
     );
}


const AdoptionProcess = () => {
    return ( 
        <>
            <SectionContainer>
                <main className="adoption">
                    <h2>Application Process</h2>
                    <p>
                        The application process includes the following steps:
                    </p>
                    {
                            AdoptionInfoArray.map((item,index)=>{
                                return(
                                    <AdoptionPartial title={item.title} description={item.description} key={index}/>
                                )
                            })
                        }
                </main>
                <Divider/>
            </SectionContainer>
        </>
     );
}





const AdoptionForm = () => {
    return ( 
        <>
            <div className="adoptionApplication">
                <h1>Application</h1>
                <div className="adoptionForm">
                    <FilloutStandardEmbed filloutId="1oGZT366X5us"/>
                </div>
            </div>
        </>
     );
}


const AdoptionPage = () => {
    return ( 
        <>
            <Banner/>
            <AdoptionInfo/>
            <AdoptionProcess/>
            <AdoptionForm/>
            <Footer/>
        </>
     );
}
 
export default AdoptionPage;









