import { ReactNode } from "react";



interface Props{
    children?: ReactNode
}

const MainContainer = ({
    children
}:Props) => {
    return ( 
        <>
            <main className="mainContainer">
                {children}    
            </main>
        </>
     );
}
 
export default MainContainer;












