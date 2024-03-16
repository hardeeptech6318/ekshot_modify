import Image from "next/image"
import mobile from "@/images/join-mobile.png"
import store1 from "@/images/app-store1.png"
import store2 from "@/images/app-store2.png"
import map from "@/images/map.png"


function Section6() {
  return (
    <section className=" bg-[#F09533] my-32 rounded-lg container">
        <div className=" px-20 py-5 grid grid-cols-12 relative">

          <div className=" col-span-5  top-[-80px]  left-10 absolute">
            <Image className=" max-h-[560px] w-full" src={mobile} alt="mobile" height={796} width={428} />
          </div>

          <div className=" col-span-5"></div>


          <div className=" col-span-5">
            <h2 className=" text-3xl text-white">Join The Local Revolution!</h2>
            <div>
              <p className=" py-5 font-semibold text-lg text-[#e62f2e]">Download EKSHHOT Customer App</p>
              <div className=" flex  items-center gap-5 my-5">
                <div><Image className=" max-h-[40px] w-full" src={store2} height={60} width={184} alt="" /></div>
                <div><Image className=" max-h-[40px] w-full" src={store1} height={60} width={201} alt="" /></div>
              </div>

              <p className=" py-5 font-semibold text-lg text-[#e62f2e]">Download EKSHHOT Business App</p>
              <div className=" flex  items-center gap-5 my-5">
                <div><Image className=" max-h-[40px] w-full" src={store2} height={60} width={184} alt="" /></div>
                <div><Image className=" max-h-[40px] w-full" src={store1} height={60} width={201} alt="" /></div>
              </div>
            </div>

          </div>


          <div className=" col-span-2">
            <Image src={map} alt="mapimage" width={456} height={492}/>
          </div>

        </div>
      </section>
  )
}

export default Section6