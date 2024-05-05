import Link from "next/link";
import { ReactNode } from "react";


interface props{
    children: ReactNode,
    herf: string
}


const ButtonMediumBlack = ({
    children,
    herf
}:props) => {
    return ( 
        <button className="buttonMediumBlack"><Link href={herf} target="_blank">{children}</Link></button>
     );
}

export default ButtonMediumBlack;








