"use client"


import React, { useState } from 'react'
import { motion
    , useMotionValue, useTransform 
} from "framer-motion";
import Image, { StaticImageData } from 'next/image';

function HoverImage({src,height,width,imgClassName,divClassName}:{src:StaticImageData,height:number,width:number,imgClassName?:string,divClassName?:string}) {
    const x = useMotionValue(200);
    const y = useMotionValue(200);
    const [hoverstate,setHoverstate]=useState(false)
    const rotateX = useTransform(y, [0, 400], [25, -25]);
    const rotateY = useTransform(x, [0, 400], [-25, 25]);
  
    function handleMouse(event: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) {
        const rect = event.currentTarget.getBoundingClientRect();
  
        setHoverstate(true)
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }
  
    function handleMouseMove(){
      setHoverstate(false)
      x.set(0)
      y.set(0)
    }
  
  return (
    <motion.div className={divClassName}
    style={{
     backgroundColor: "#fff",
     rotateX,
     rotateY,
     background:"transparent"
 }}
   onMouseMove={handleMouse}
   onMouseOut={handleMouseMove}
   
   >
     <Image className={imgClassName} src={src} alt="screenshot1" width={width} height={height} />
   </motion.div>
  )
}

export default HoverImage