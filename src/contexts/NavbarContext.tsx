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
        new NavbarLink('Adoption Info','/adoption',[
            //new linkObject('Adoption Application', "/adoption/application") //sub link
        ]),
        new NavbarLink('Our Animals','/animals',[
            //new linkObject('Dogs', "/animals/dogs") //sub link
        ]),
        new NavbarLink('About Us','/about',[
            //new linkObject('test', "/test") //sub link
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











