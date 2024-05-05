import { ReactNode } from "react";


interface props{
    children: ReactNode,
    customClasses?:string
}


const SectionContainer = ({
    children,
    customClasses
}:props) => {
    return ( 
        <>
            <div className={`sectionContainerPadded ${customClasses}`}>
                {children}
            </div>
        </>
     );
}
 
export default SectionContainer;








