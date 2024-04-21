import { ReactNode } from "react";


interface props{
    children: ReactNode
}


const ButtonMediumBlack = ({
    children
}:props) => {
    return ( 
        <button className="buttonMediumBlack">{children}</button>
     );
}

export default ButtonMediumBlack;








