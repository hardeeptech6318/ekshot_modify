"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import FRUITS from "@/images/FRUITS-VEGGIES.jpg";
import MEAT from "@/images/MEAT.jpg";
import RESTAURANT from "@/images/RESTAURANT.jpg";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

function Section4() {
  return (
    <section className=" container my-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full "
      >
        <CarouselContent>
          <CarouselItem key="fruit">
            <div className=" grid grid-cols-12">
              <div className=" md:col-span-7 col-span-12 mt-5 mx-auto">
                <h2 className=" text-3xl font-semibold mb-5 text-[#04bd04]">
                  FRESH FRUITS AND VEGETABLES
                </h2>
                <p className=" leading-7">
                  Hand Picked Fresh Fruits 🥝 And Vegetables 🥕 Delivered Home.
                  <br />
                  Enjoy Tasty Exotics Fruits and Veggies
                  <br />
                  Get it delivered at the slot of your convenience
                  <br />
                  Environment Freindly Packaging made of Cotton ♻️
                  <br />
                  Currently Delivering in Gandhidham, Adipur, Anjar and Mundra
                </p>
                <div className=" my-5">
                  <Button className=" bg-[#04bd04]">
                    View All Fruits & Veggies
                  </Button>
                </div>
              </div>

              <motion.div className=" md:col-span-5 col-span-7 mx-auto">
                <Image
                  className=" w-96 h-auto"
                  src={FRUITS}
                  alt="veggies"
                  width={827}
                  height={923}
                />
              </motion.div>
            </div>
          </CarouselItem>

          <CarouselItem key="restaurant">
            <div className=" grid grid-cols-12">
              <div className=" col-span-7 mx-auto mt-5">
                <h2 className=" text-3xl font-semibold mb-5 text-[#E95C5C]">
                  RESTAURANTS
                </h2>
                <p className=" leading-7">
                  Food delivered Hot From Your Favourite Restaurants Near You.
                  <br />
                  Discover All Restaurants in Your City.
                  <br />
                  Order Pizza, Burger, Kathyawadi, Gujarati Thali and all your
                  favorite dishes online.
                  <br />
                </p>
                <p>Ekshhot App.📲</p>
                <p>
                  Currently Delivering in Kutch, Mundra, Mandvi, Kandla,
                  Gandhidham, Adipur and Anjar.
                </p>
                <div className=" my-5">
                  <Button className=" bg-[#E95C5C]">
                    View All Restaurants
                  </Button>
                </div>
              </div>
              <div className=" col-span-5">
                <Image
                  src={RESTAURANT}
                  className=" w-96 h-auto"
                  alt="veggies"
                  width={827}
                  height={923}
                />
              </div>
            </div>
          </CarouselItem>

          <CarouselItem key="meat">
            <div className=" grid grid-cols-12">
              <div className=" col-span-7 mt-5 mx-auto">
                <h2 className=" text-3xl font-semibold mb-5 text-[#1546e6]">
                  FRESH CHICKEN, MEAT AND SEA FOODS
                </h2>
                <p className=" leading-7">
                  Enjoy freshly caught fish 🐟, freshly Cut premium meats 🥩&
                  chicken 🐔
                  <br />
                  Prawns 🍤& Egg
                  <br />
                  Environment Friendly Packaging made of wood ♻️
                  <br />
                  Express Delivery
                  <br />
                  <span className=" text-[#1546e6]">
                    Currently Delivering in Gandhidham, Adipur, Mundra and Anjar
                  </span>
                </p>
                <div className="py-5">
                  <Button className=" bg-[#1546e6] ">
                    View All Non-Veg & Meat
                  </Button>
                </div>
              </div>
              <div className=" col-span-5">
                <Image
                  src={MEAT}
                  className=" w-96 h-auto"
                  alt="veggies"
                  width={827}
                  height={923}
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />

        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Section4;
