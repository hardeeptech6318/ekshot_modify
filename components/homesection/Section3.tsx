import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import grocery from "@/images/grocery2.png"

function Section3() {
  return (
    <section className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg container">
        <div className="  grid md:grid-cols-2 grid-cols-1">
          <div className=" flex justify-center items-center flex-col py-10">
            <h2 className=" font-bold text-4xl text-center text-white py-5">GROCERIES</h2>
            <Image className="hover:scale-105 transition duration-500 ease-in-out" src={grocery} alt="groceryimage" width={481} height={376} />
          </div>
          <div className=" flex py-20 flex-col gap-5  items-start">

            <p className="text-white">
              {/* <AnimatedTextWord text="Single App - to fulfill your daily grocery needs"/> */}
              Single App - to fulfill your daily grocery needs<br/>
              
              Choose from wide variety of options<br />
              Enjoy express delivery within minutes<br />
              Currently Delivering in Gandhidham, Adipur & Anjar</p>
            <Button>View All Products</Button>

          </div>
        </div>
      </section>
  )
}

export default Section3