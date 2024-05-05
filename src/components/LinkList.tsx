
//facebook
//tickTok
//insta
//cashapp
//amazon Wish list
//linktree

import Link from "next/link"
import Image from "next/image"
import facebook from "../../public/icons/facebook.svg"
import tickTok from "../../public/icons/tictok.svg"
import Insta from "../../public/icons/instagram-full.svg"
import CashApp from "../../public/icons/cashapp.svg"
import amazonWIsh from "../../public/icons/amazon.svg"
import linkTree from "../../public/icons/brand-linktree.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props"



interface Props{
    linkLocation: string,
    image: StaticImport
}
const LinkImage = ({
    linkLocation,
    image
}:Props) => {
    return ( 
        <Link href={linkLocation} target="_blank"><Image className="image" src={image} alt=""/></Link>
     );
}



const LinkList = () => {

    const facebookLink = "https://www.facebook.com/brenda.correia.370?mibextid=LQQJ4d"
    const ticTokLink = "https://www.tiktok.com/@grandmasoutcastdogs?_t=8lOyO7Fyx8J&_r=1"
    const instaLink = "https://www.instagram.com/grandmashomeforoutcastdogs/?utm_source=qr"
    const cashAppLink = "https://cash.app/$grandmashouserescue"
    const amazonWishLink = "https://www.amazon.com/hz/wishlist/ls/1ZFD84V585QDJ?ref_=wl_share"
    const linkTreeLink = "https://linktr.ee/grandmasrescue"

    return ( 
        <>
            <main className="linkList">
                <LinkImage image={facebook} linkLocation={facebookLink}/>
                <LinkImage image={tickTok} linkLocation={ticTokLink}/>
                <LinkImage image={Insta} linkLocation={instaLink}/>
                <LinkImage image={CashApp} linkLocation={cashAppLink}/>
                <LinkImage image={amazonWIsh} linkLocation={amazonWishLink}/>
                <LinkImage image={linkTree} linkLocation={linkTreeLink}/>
            </main>
        </>
     );
}
 
export default LinkList;











