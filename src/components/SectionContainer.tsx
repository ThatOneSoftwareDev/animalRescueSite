import { ReactNode } from "react";


interface props{
    children: ReactNode
}


const SectionContainer = ({
    children
}:props) => {
    return ( 
        <>
            <div className="sectionContainerPadded">
                {children}
            </div>
        </>
     );
}
 
export default SectionContainer;








