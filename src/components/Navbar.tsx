'use client'

import Image from "next/image";
import logo from '../../public/logos/logo-circle.png'
import { useMotionValueEvent, useScroll } from "framer-motion"
import { useContext, useEffect, useState } from "react";
import { NavbarContext } from "@/contexts/NavbarContext";
import Link from "next/link";


const Logo = () => {
    //make varables for scroll
    const { scrollY  } = useScroll()
    const [scrollPosition,setScrollPosition] = useState(false)
    const scrollThreshold = 100

    //this monitors the scroll position without constant rerenders
    useMotionValueEvent(scrollY, "change", (latest) => {
        //console.log("Page scroll: ", latest) //this is the number
        if(latest > scrollThreshold && scrollPosition !== true){
            setScrollPosition(!scrollPosition)
        }else if(latest < scrollThreshold && scrollPosition !== false){
            setScrollPosition(!scrollPosition)
        }
    })

    return ( 
        <>
            <Image src={logo} alt="" className={`${scrollPosition ? 'small' : ''}`}/>
        </>
     );
}

const Links = () => {
    
    const {navbarLinks} = useContext(NavbarContext)
    const [visible,setVisible] = useState(false)

    
    return ( 
        <>
            <span className="links">
                {
                    navbarLinks.map((item,index)=>{
                        return(
                            <span key={index}>
                                <Link href={item.linkLocation}
                                onMouseEnter={()=>{setVisible(!visible)}} 
                                onMouseLeave={()=>{setVisible(!visible)}}
                                >{item.linkName}</Link>
                                <div className={`dropdown ${visible ? 'visible' : ''}`}>
                                    {
                                        item.subListLinks.map((item2,index2)=>{
                                            return(
                                                <>
                                                    <Link key={index2} href={item2.location}>{item.linkName}</Link>
                                                </>
                                            )
                                        })
                                    }
                                </div>    
                            </span>
                        )
                    })
                }
            </span>
        </>
     );
}


const Navbar = () => {

    //make varables for scroll
    const { scrollY  } = useScroll()
    const [scrollPosition,setScrollPosition] = useState(false)
    const scrollThreshold = 100

    //this monitors the scroll position without constant rerenders
    useMotionValueEvent(scrollY, "change", (latest) => {
        //console.log("Page scroll: ", latest) //this is the number
        if(latest > scrollThreshold && scrollPosition !== true){
            setScrollPosition(!scrollPosition)
        }else if(latest < scrollThreshold && scrollPosition !== false){
            setScrollPosition(!scrollPosition)
        }
    })

    return ( 
        <>
            <nav className={`navbar ${scrollPosition ? 'smallNavPadding' : ''}`}>
                <Logo/>
                <Links/>
            </nav>
        </>
     );
}
 
export default Navbar;








