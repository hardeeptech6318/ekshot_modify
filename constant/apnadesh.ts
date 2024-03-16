
import image1 from "@/images/Burger 1.png"
import image2 from "@/images/Dosa 1.png"
import image3 from "@/images/Pizza 1.png"
import image4 from "@/images/Thaali 1.png"
import { StaticImageData } from "next/image"

export const apnadesh=[
    {
        id:1,
        url:image3,
        height:411,
        width:614
    },
    {
        id:2,
        url:image1,
        height:422,
        width:633
    },
    {
        id:3,
        url:image4,
        height:438,
        width:696
    },
    {
        id:4,
        url:image2,
        height:427,
        width:573
    },
]


export interface ApnadeshPros{
    
        id:number,
        url:StaticImageData,
        height:number,
        width:number
    
}