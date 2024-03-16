import { CarouselDemo } from "@/components/CarouselComponent";
import { apnadesh } from "@/constant/apnadesh";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <section className=" bg-about  bg-cover bg-center min-h-screen w-full">
        <h2 className="   flex  items-center min-h-screen text-5xl font-bold text-[#4d4d4f] ">
          <span className=" m-20"> ABOUT US</span>
        </h2>
      </section>

      <section className="     px-20 py-40 bg-[#EDF0F8]">
        EkShhot is a mobile app which brings all shops no matter how small or
        big online. All merchants can list themselves on our app by just
        downloading business app free of cost. Users can discover Restaurants,
        Food Outlets, Kirana Store, and other retailers near them in the
        directory section on our app. Currently you can order Pizza, Burger,
        Kathyawadi, Gujarati Thali and all your favorite dishes online from your
        favorite restaurants near you. We are delivering Online in Kutch,
        Mundra, Mandvi, Kandla, Gandhidham, Adipur and Anjar. We even deliver
        from Restaurant as far as 12 Km. At Ekshhot, we strive and assure to
        provide our customers with hassle free solutions for their business
        needs and personal needs just a few clicks away.
      </section>

      <section className="p-20 bg-[#F6A937]  text-white relative  container rounded-lg mt-40 ">
        <div className=" grid grid-cols-6 ">
          <div className=" col-span-4">
            <h2 className=" text-3xl py-5 font-semibold ">Our App</h2>
            <p className=" leading-6">
              Here at Ekshhot, all merchants can get online seamlessly by just
              downloading Ekshhot business app. Customers can browse all
              business near them and order products sitting on the couch.
              Businesses can opt for self-delivery or they can avail our
              doorstep delivery services. Get Online - Get Visible - Get Ekshhot
            </p>
          </div>
        </div>

        <div className=" absolute  top-[-130px] right-16">
          <Image
            className="   max-h-[560px] w-full"
            src="https://ekshot.com/images/about2.png"
            alt="jhbf"
            width={1783}
            height={3317}
          />
        </div>
      </section>

      <section className=" my-28">
        <iframe
          className=" aspect-[16/9] w-full md:w-1/2 mx-auto rounded-3xl "
          src="https://www.youtube.com/embed/vyftqTm4hLU?si=_tTlX6zub9bgC75-"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>

      <section className=" container">
        <div className=" grid md:grid-cols-2 grid-cols-1 text-center md:text-start ">
          <div className=" flex justify-center items-center">
            <CarouselDemo data={apnadesh} />
          </div>
          <div>
            <h2 className=" text-3xl font-semibold">
              Built For Local Businesses
            </h2>
            <p className=" py-5">
              Ekshhot is a seamlessly integrated mobile application made in
              India, for India! Developed for the sole purpose of enabling local
              businesses reap the benefits of conducting their business online.
              By leveraging the benefits of the ever-changing digital landscape,
              we are here to enable and empower businesses of every scale to
              build their online presence and increase online sales, all in one
              shot!
            </p>

            <p>
              All Businesses can get online and easily connect with customers in
              their vicinity, with Ekshhot Golden Pages.
            </p>
            <p className=" py-5">Get Online, Get Visible, Get Ekshhot</p>
          </div>
        </div>
      </section>

      <section className=" my-10">
        <iframe
          className=" aspect-[16/9] w-full md:w-1/2 mx-auto rounded-3xl "
          src="https://www.youtube.com/embed/a8poXGF-6Ns?fs=0&amp;modestbranding=1&amp;rel=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </section>

      <section className="bg-[#C9D4DA] container rounded-lg  mb-40 shadow-sm">
        <div className=" grid grid-cols-12">
          <div className=" md:col-span-6 col-span-12">
            <Image
              src="https://ekshot.com/images/our-mission-pic.png"
              alt="jhkadkgf"
              width={1110}
              height={550}
            />
          </div>

          <div className=" md:col-span-6 my-auto col-span-12 text-center md:text-start">
            <h2 className=" font-bold text-3xl">Our Team</h2>
            <p className=" py-5">
              Our Director, Mr. Shankar T. Sujan has done his Post Graduation in
              Maritime Management from London, England. Thereafter, he came up
              with an idea of an extensive and integrated Electronic and
              E-Commerce platform and decided to lay his foundation on it and
              formulating it into a well-thought of business which further got
              expanded by his acumen in the shipping industry, with his
              experience as well as practical exposure of the industry. He is
              also the Managing Director of M/s Sujan Multiports Ltd. He has a
              team of people from IIM to help him in acheiving his vision.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
