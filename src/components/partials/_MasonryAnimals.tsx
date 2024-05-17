'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import newNumberArray from "@/tempData/NumberArray";

interface VideoPlayerProps{
    video : string,
    open : Dispatch<SetStateAction<string>>
}
const VideoPlayer = ({
    video,
    open
}:VideoPlayerProps) => {
    return ( 
        <>
            <main className="videoPlayer">
                <video loop autoPlay controls preload="none">
                    <source src={video}/>
                </video>
                <i onClick={()=>{open('')}} className="bi bi-x-lg close"></i>
            </main>
        </>
     );
}

const SkeletonMain = () => {
    return ( 
        <>
            <Skeleton height={"500px"}/>
        </>
     );
}


//this is the mansonry animals on the Animals Page
const MediaAnimals = () => {

    const [numberArray,setNumberArray] = useState<number[]>(newNumberArray)
    const [selected,setSelected] = useState("")

    function handleClick(e:any){
        let videoSrc = e.target.currentSrc.toString()
        let src = videoSrc.replace("http://localhost:3000","")
        setSelected(src)
    }
  
    return ( 
      <>
        {
            selected == "" ? <></> : <VideoPlayer video={selected} open={setSelected}/>
        }
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry>
                {
                    numberArray.length == 0 ? <></> : 
                    numberArray.map((item,index)=>{
                        return(
                            <video 
                            key={index} 
                            muted 
                            loop 
                            autoPlay 
                            className="video"
                            onClick={handleClick}
                            >
                                <source src={`/animals/videos/${item}.mp4`} />
                            </video>
                        )
                    })
                }
            </Masonry>
          </ResponsiveMasonry>
      </>
     );
}

  
  export default MediaAnimals;

















