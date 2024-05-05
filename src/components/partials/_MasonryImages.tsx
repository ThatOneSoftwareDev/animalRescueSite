'use client'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import SectionContainer from "../SectionContainer"
import Image from "next/image"
import { useEffect,useState } from "react"
import hamster from "../../../public/Animal-Picture-Temp/hamster.png"
import Divider from "../Divider"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { AnimalImages } from "@/tempData/AnimalImags"



//this is the fourth element on the frount page
const MediaAnimals = () => {
  
    return ( 
      <>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry>
              {
                AnimalImages.map((item,index)=>{
                  return(
                    <Image src={item.imageLink} alt="" className="imagem" key={index} loading="lazy"/>
                  )
                })
              }
            </Masonry>
          </ResponsiveMasonry>
      </>
     );
}

  
  export default MediaAnimals;







