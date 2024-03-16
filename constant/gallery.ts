
import image1 from "@/images/image1.jpeg"
import image2 from "@/images/image2.jpeg"
import image3 from "@/images/image3.jpeg"
import image4 from "@/images/image4.jpeg"
import image5 from "@/images/image5.jpeg"
import image6 from "@/images/image6.jpeg"
import photo2 from "@/images/photo2.jpeg"
import photo4 from "@/images/photo4.jpeg"
import photo5 from "@/images/photo5.jpeg"
import photo6 from "@/images/photo6.jpeg"
import onam1 from "@/images/onam1.jpg"
import onam2 from "@/images/onam2.jpg"
import onam3 from "@/images/onam3.jpg"
import onam4 from "@/images/onam4.jpg"
import onam5 from "@/images/onam5.jpg"
// import onam6 from "@/images/onam6.jpg"
import onam7 from "@/images/onam7.jpg"
import onam8 from "@/images/onam8.jpg"
import onam9 from "@/images/onam9.jpg"
import onam10 from "@/images/onam10.jpg"
import { StaticImageData } from "next/image"

export const gallery=[
    {
        id:1,
        url:photo2,
        type:"ganesh_2022",
        height:1200,
        width:1600
    },
    {
        id:2,
        url:photo4,
        type:"ganesh_2022",
        height:1200,
        width:1600
    },
    {
        id:3,
        url:photo5,
        type:"ganesh_2022",
        height:1200,
        width:1600
    },
    {
        id:4,
        url:photo6,
        type:"ganesh_2022",
        height:1200,
        width:1600
    },
    // {
    //     id:5,
    //     url:"https://ekshot.com/images/Photo7.jpeg",
    //     type:"ganesh_2022"
    // },
   
    // {
    //     id:6,
    //     url:"https://ekshot.com/images/photo8.jpeg",
    //     type:"ganesh_2022"
    // },
    // {
    //     id:7,
    //     url:"https://ekshot.com/images/photo9.jpeg",
    //     type:"ganesh_2022"
    // },
    {
        id:8,
        url:image1,
        type:"navratri_2022",
        height:1600,
        width:1200
    },
    {
        id:9,
        url:image2,
        type:"navratri_2022",
        height:1600,
        width:1200
    },
    {
        id:10,
        url:image3,
        type:"navratri_2022",
        height:1600,
        width:1200
    },
    {
        id:11,
        url:image4,
        type:"navratri_2022",
        height:1600,
        width:1200
    },
    {
        id:12,
        url:image5,
        type:"navratri_2022",
        height:1600,
        width:1200
    },
    {
        id:13,
        url:image6,
        type:"navratri_2022",
        height:1600,
        width:1200
    },
    {
        id:14,
        url:onam1,
        type:"onam_2022",
        height:1200,
        width:1600
    },
    {
        id:15,
        url:onam1,
        type:"onam_2022",
        height:1200,
        width:1600
    },
    {
        id:16,
        url:onam2,
        type:"onam_2022",
        height:1200,
        width:1600
    },
    {
        id:17,
        url:onam3,
        type:"onam_2022",
        height:1200,
        width:1600
    },
    {
        id:18,
        url:onam4,
        type:"onam_2022",
        height:1200,
        width:1600
    },
    {
        id:19,
        url:onam5,
        type:"onam_2022",
        height:1200,
        width:1600
    },
    {
        id:20,
        url:onam7,
        type:"onam_2022",
        height:1200,
        width:1600
    },
    {
        id:21,
        url:onam8,
        type:"onam_2022",
        height:1200,
        width:1600
    },
    {
        id:22,
        url:onam9,
        type:"onam_2022",
        height:1200,
        width:1600
    },
    {
        id:23,
        url:onam10,
        type:"onam_2022",
        height:1200,
        width:1600
    },
]


export interface GalleryPropsCustom {
    id:number,
    url:StaticImageData,
    type:string
    height:number
    width:number
}