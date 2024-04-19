'use client'
import { linkObject, NavbarLink, NavbarLinksObject } from "@/data/NavbarLinks";
import { createContext, useEffect } from "react";
import { ReactNode } from "react";


interface contextProps{
    children?: ReactNode
}
interface NavbarContextProps{
    navbarLinks: NavbarLink[]
}



export const NavbarContext = createContext<NavbarContextProps>({
    navbarLinks: []
})

const NavbarContextWrapper = ({
    children
}:contextProps) => {

    //make links appear
    const navbarLinks = [
        new NavbarLink('test','/dev',[
            new linkObject('test', "/test") //sub link
        ]),
        new NavbarLink('test','/dev',[
            new linkObject('test', "/test") //sub link
        ]),
        new NavbarLink('test','/dev',[
            new linkObject('test', "/test") //sub link
        ]),
        new NavbarLink('test','/dev',[
            new linkObject('test', "/test") //sub link
        ]),
        new NavbarLink('test','/dev',[
            new linkObject('test', "/test") //sub link
        ]),
        new NavbarLink('test','/dev',[
            new linkObject('test', "/test") //sub link
        ]),
        new NavbarLink('test','/dev',[
            new linkObject('test', "/test") //sub link
        ]),
        new NavbarLink('test','/dev',[
            new linkObject('test', "/test") //sub link
        ])
    ]

    

    const NavbarProviderValue = {
        navbarLinks
    }

    return ( 
        <>
            <NavbarContext.Provider value={NavbarProviderValue}>
                {children}
            </NavbarContext.Provider>
        </>
     );
}
 
export default NavbarContextWrapper;











