import Image from 'next/image'
import React from 'react'
import CarouselCommon from '../CarouselCommon'
import { motion
    
} from "framer-motion";
import { apnadesh } from '@/constant/apnadesh';

function Section5() {
  return (
    <section className=" flex justify-center items-center pt-20 px-20 bg-[#EDF0F7] rounded-lg shadow-sm container" >
        <div className=" grid grid-cols-12">
          <div className="  md:col-span-7 col-span-12">
            <div className=" pb-5">
              <Image src="https://ekshot.com/images/apna.png" alt="" height={39} width={326} />
            </div>
            <div 
    //  initial={{ y: 200 ,opacity:0}}
            
            // transition={{ duration: 0.5 }}
            // whileInView={{ y: 0,opacity:1 }}
             className=" flex flex-col gap-5 ">
              <p>Who understands us better than those we consider our own? The Kaka at the grocery store around the corner knows which brand of salt you prefer. You know precisely which dishes are the best at the restaurant down the road. This sense of community & belonging is what we&#39;re bringing to you in a fresh new way with Ekshhot!</p>

              <p>
                Ekshhot is an innovative, one-of-a-kind digital app that connects you with local businesses and vendors, enabling you to get exactly what you want, when you want it.
              </p>


              <p>
                By being a part of the Ekshhot ecosystem, you are also helping others while helping yourself. Small local businesses need and deserve our constant support & patronage - because, after all, we are only as strong as our community!
              </p>

            </div>
          </div>

          <div className="  md:col-span-5 col-span-12 flex justify-center items-center">
            <CarouselCommon data={apnadesh} />

          </div>
        </div>

      </section>
  )
}

export default Section5