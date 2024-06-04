'use client'

import Image from "next/image";
import logo from '../../public/logos/logo-circle.png'
import { useMotionValueEvent, useScroll } from "framer-motion"
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { NavbarContext } from "@/contexts/NavbarContext";
import Link from "next/link";
import { useScrollPosition } from "@/custom-hooks/useScrollPosition";


const Logo = () => {
    //make varables for scroll
    const scrollThreshold = 150
    const scrollPosition = useScrollPosition()

    useEffect(()=>{
        console.log(scrollPosition)
    },[scrollPosition])
    
    //this monitors the scroll position without constant rerenders

    return ( 
        <>
            <Link href={'/'}>
            <Image src={logo} alt="" className={`${scrollPosition > scrollThreshold ? 'small' : ''}`}/>
            </Link>
        </>
     );
}

const Links = () => {
    
    const {navbarLinks} = useContext(NavbarContext)
    const [visible,setVisible] = useState<boolean[]>([])

    const handleMouseEnter = (index:number) => {
        let updatedVisible = [...visible];
        updatedVisible[index] = true;
        setVisible(updatedVisible);
    };

    const handleMouseLeave = (index:number) => {
        let updatedVisible = [...visible];
        updatedVisible[index] = false;
        setVisible(updatedVisible);
    };

    useEffect(()=>{
        navbarLinks.map((item,index)=>{
            //console.log(item.subListLinks.length)
            let newArray = visible
            newArray[index] = false
            setVisible(newArray)
        })
    },[navbarLinks,visible])
    
    return ( 
        <>
            <span className="links">
                {
                    navbarLinks.map((item,index)=>{
                        return(
                            <span key={index}>
                                <Link href={item.linkLocation}
                                onMouseEnter={()=>{handleMouseEnter(index)}} 
                                onMouseLeave={()=>{handleMouseLeave(index)}}
                                >{item.linkName}</Link>
                                <div 
                                className={`dropdown ${visible[index] ? 'visible' : ''}`}
                                onMouseEnter={()=>{handleMouseEnter(index)}} 
                                onMouseLeave={()=>{handleMouseLeave(index)}}
                                >
                                    {
                                        item.subListLinks.map((item2,index2)=>{
                                            return(
                                                <Link key={index2} href={item2.location}>{item2.name}</Link>
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


interface MobileProps{
    open:unknown,
    setOpen: Dispatch<SetStateAction<boolean>>
}
const Mobile = ({
    open,
    setOpen
}:MobileProps) => {
    const {navbarLinks} = useContext(NavbarContext)
    
    return ( 
        <>
            <i className="bi bi-list menuIcon" onClick={()=>{setOpen(!open)}}></i>
            <div className="mobileNav" style={{
                height: `${open ? '100vh' : '0'}`,
                top: `${open ? '0' : '-20px'}`
            }}>
                <i className="bi bi-list menuIcon" onClick={()=>{setOpen(!open)}}></i>
            {
                <span className="linksMobile">
                    {
                        navbarLinks.map((item,index)=>{
                            return(
                                    <Link key={index} onClick={()=>{setOpen(!open)}} href={item.linkLocation}
                                    >{item.linkName}</Link> 
                                )
                        })
                    }
                </span>
            }
            </div>
        </>
     );
}


const Navbar = () => {

    //make varables for scroll
    const { scrollY  } = useScroll()
    const [scrollPosition,setScrollPosition] = useState(false)
    const scrollThreshold = 100
    const [open,setOpen] = useState(false)

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
                <Mobile open={open} setOpen={setOpen}/>
            </nav>
        </>
     );
}
 
export default Navbar;








