import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className=" bg-[#000000]  text-muted-foreground">
      <div className=" grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-5 p-10">
        <div className=" flex flex-col gap-2">
          <Image
            src="https://ekshot.com/images/logo.png"
            alt="logo"
            height={40}
            width={171}
          />
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <div className=" flex gap-5">
            <Facebook />
            <Instagram />
          </div>
        </div>

        <div>
          <h2 className=" text-white font-semibold">CONTACT US</h2>
          <p className=" my-2">Email: contact@ekshot.com</p>
          <p>Call: 1-800-121-9975</p>
        </div>

        <div>
          <h2 className=" text-white font-semibold">VISIT US</h2>
          <p className="pt-2 leading-7">
            2nd Floor, Plot No. 286,
            <br />
            Sector 1A, Gandhidham Kutch,
            <br />
            Gujarat 370201.
            <br />
            Ph : (+91) 8347161616
          </p>
        </div>

        <div>
          <h2 className=" text-white font-semibold">LEGAL</h2>
          <div className=" flex flex-col gap-2 pt-2">
            <Link href="refund">Refund and Cancellation Policy</Link>
            <Link href="policy">Privacy Policy</Link>
            <Link href="terms">Terms & Conditions </Link>
          </div>
        </div>
      </div>

      <div className=" text-center p-3 bg-[#111111] text-muted-foreground text-sm">
        Copyright © 2022 Ekshot Advertcomm Private Limited
      </div>
    </footer>
  );
}

export default Footer;
