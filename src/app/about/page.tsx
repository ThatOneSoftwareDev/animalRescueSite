

//from nextjs
import Image from 'next/image';


//images
import BrownDog from '../../../public/Animal-Picture-Temp/dog-brown.jpg'
import SectionContainer from '@/components/SectionContainer';
import { InfoSectionData } from '@/tempData/InfoSectionData';
import Footer from '@/components/Footer';
import Link from 'next/link';
import DontateButton from '../../../public/basic-img/donate button.gif'
import KeepUpWith from '@/components/KeepUpWith';
import { ReactNode } from 'react';

const Banner = () => {
    return ( 
        <>
            <main className='aboutBanner'>
                <Image src={DontateButton} alt='' className='donateButton'/>
            </main>
        </>
     );
}


const MissionStatement = () => {
    return ( 
        <>
            <span className="missionStatement">
                <h2>Grandma{"'"}s House Mission Statement</h2>
                <p>
                Grandma{"'"}s House is dedicated to educating people about the injustices faced by animals and how we can better coexist with our fellow earthlings. We operate under the guiding principle that animals are our equals and deserve equal consideration for their needs and desires.
                </p>
            </span>
        </>
     );
}
interface InfoSectionTextProps{
    title: string,
    text:string,
    children?: ReactNode
} 
const InfoSectionText = ({
    title,
    text,
    children
}:InfoSectionTextProps) => {
    return ( 
        <>
            <span className='infoSectionText'>
                <h4>{title}</h4>
                <p>
                    {children}
                    {text}
                </p>
            </span>
        </>
     );
}
const InfoSection = () => {
    return ( 
        <>
            <section className="infoSection">
                {
                    InfoSectionData.map((item,index)=>{
                        return(
                            <InfoSectionText 
                            title={item.title}
                            text={item.text}
                            key={index}
                            >
                                {
                                    index !== 1 ? <></>: 
                                    <Image className='img' src={'/Animal-Picture-Temp/cute-cat.png'} alt='' width={50} height={50}/>
                                }
                            </InfoSectionText>
                        )
                    })
                }
            </section>
        </>
     );
}
const AboutText = () => {
    return ( 
        <>
            <SectionContainer customClasses='aboutSectionText'>
                <MissionStatement/>
                <InfoSection/>
            </SectionContainer>
        </>
     );
}



const AboutPage = () => {
    return ( 
        <>
            <Banner/>
            <AboutText/>
            <div className="keepContainer">
                <KeepUpWith/>
            </div>
            <Footer/>
        </>
     );
}
 
export default AboutPage;












