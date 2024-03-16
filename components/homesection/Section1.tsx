"use client";


import mobile1 from "@/images/mobile1.png";

import { Typewriter } from "react-simple-typewriter";

import HoverImage from "../HoverImage";

function Section1() {
  return (
    <section className="transition duration-500 ease-in-out">
      <div className=" bg-hero h-full pt-[170px]  bg-center bg-cover min-h-screen">
        <div className="    grid lg:grid-cols-2 grid-cols-1  container   ">
          <div className=" flex justify-center items-center flex-col text-start ">
            <div>
              <h2 className=" text-[#4d4d4f] text-start text-6xl mb-5 font-bold">
                Everything You{" "}
                <span className=" text-[#d30037]">
                  <Typewriter words={["Desire", "Want", "Love"]} />
                </span>
              </h2>
              <p className=" text-muted-foreground font-semibold">
                Brought closer to you by Ekshhot
              </p>
            </div>
          </div>

          <HoverImage
            src={mobile1}
            height={1968}
            width={2954}
            divClassName="m-auto min-h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
