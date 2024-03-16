import Image from "next/image"
import screenshot from "@/images/Screenshot1.png"
import HoverImage from "../HoverImage"


function Section2() {
  return (
    <section className=" grid grid-cols-12 py-10 bg-[#EDF0F7]  shadow-sm ">
      

        
         {/* <motion.div className=" md:col-span-5 col-span-12"
         style={{
          backgroundColor: "#fff",
          rotateX,
          rotateY,
          background:"transparent"
      }}
        onMouseMove={handleMouse}
        onMouseOut={handleMouseMove}
        
        >
          <Image className="m-auto max-h-[550px] w-auto" src={screenshot} alt="screenshot1" width={2373} height={4184} />
        </motion.div> */}

        <HoverImage key="screenshot" src={screenshot} height={4184} width={2373} imgClassName="m-auto max-h-[550px] w-auto" divClassName="md:col-span-5 col-span-12"/>

        <div className=" flex justify-between items-center flex-col text-center col-span-12  md:col-span-7">
          <div>
            <h2 className=" text-4xl font-semibold text-[#4d4d4f] pb-5">Download App</h2>
            <p className=" leading-8 text-2xl  font-medium text-[#E95C5C]  ">Order Food From Restaurants <br />
              Fresh Fruits and Vegetables<br />
              Fresh Meat and SeaFood<br />
              Groceries<br />
              All in a single APP</p>
          </div>


          <div>
            <div className=" my-10">
              <p>Use Code</p>
              <h2 className=" text-4xl  font-bold my-5">FREEDEL</h2>
              <p className="   text-[#E95C5C]">For Free Delivery From Your Favourite Restaurants</p>
            </div>
            <div>
              <div className=" flex  justify-center items-center gap-5 my-5">
                <div><Image className=" max-h-[40px] w-full" src="https://ekshot.com/images/app-store2.png" height={60} width={184} alt="" /></div>
                <div><Image className=" max-h-[40px] w-full" src="https://ekshot.com/images/app-store1.png" height={60} width={201} alt="" /></div>
              </div>

              <p className=" text-muted-foreground">Discover Nearby Shops and Restaurants on the app<br />
                <span>Order Can Only Be Placed From Our App.</span></p>

            </div>
          </div>


        </div>
      </section>
  )
}

export default Section2