'use client'

import Image from "next/image";
import Link from "next/link";

//images
import ticTok from "../../../public/icons/tictok.svg"
import insta from "../../../public/icons/instagram.svg"
import facebook from "../../../public/icons/facebook.svg"


const TicTokImage = () => {

    const tictokLink = "https://www.tiktok.com/@grandmasoutcastdogs?_t=8lOyO7Fyx8J&_r=1"
    const instagramLink = "https://www.instagram.com/grandmashomeforoutcastdogs/?utm_source=qr"
    const facebookLink = "https://www.facebook.com/brenda.correia.370?mibextid=LQQJ4d"

    return ( 
        <>
            <span className="Scocials">
                <Link href={tictokLink} target="_blank"><Image src={ticTok} alt=""/></Link>
                <Link href={instagramLink} target="_blank"><Image src={insta} alt=""/></Link>
                <Link href={facebookLink} target="_blank"><Image src={facebook} alt=""/></Link>
            </span>
        </>
     );
}
 
export default TicTokImage;









