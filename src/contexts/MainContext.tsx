'use client'
import { createContext } from "react";
import { ReactNode } from "react";
import NavbarContextWrapper from "./NavbarContext";

const MainContext = createContext({})

interface contextProps{
    children?: ReactNode
}

const MainContextWrapper = ({
    children
}:contextProps) => {
    return ( 
        <>
            <MainContext.Provider value={{}}>
                <NavbarContextWrapper>
                    {children}
                </NavbarContextWrapper>
            </MainContext.Provider>
        </>
     );
}
 
export default MainContextWrapper;









