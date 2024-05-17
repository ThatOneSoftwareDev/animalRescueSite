import Link from "next/link"
import ButtonMediumBlack from "./ButtonMediumBlack"
import Divider from "./Divider"




const KeepUpWith = () => {

    const facebook = "https://www.facebook.com/brenda.correia.370?mibextid=LQQJ4d"
    const insta = "https://www.instagram.com/grandmashomeforoutcastdogs/?utm_source=qr"
    const cashapp = "https://cash.app/$grandmashouserescue"
    const amazonWishlist = "https://www.amazon.com/hz/wishlist/ls/1ZFD84V585QDJ?ref_=wl_share"
  
    return ( 
      <>
          <section className="blueSectionEnd">
            <h2>Keep Up With The Grandma&apos;s House Family</h2>
            <ButtonMediumBlack herf="">SUBSCRIBE</ButtonMediumBlack>
            <p className="p">(We would never sell your info)</p>
            <p className="follow">​Follow us on <Link href={facebook} target="_blank">Facebook</Link> and <Link href={insta} target="_blank">Instagram</Link> for the most current happenings and animal updates!</p>
            <h3>Do not have cashapp? How about donating <Link target="_blank" href={amazonWishlist}>supplies</Link>?</h3>
          </section>
          <Divider/>
      </>
     );
  }

export default KeepUpWith








