"use client";

// import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ApnadeshPros } from "@/constant/apnadesh";
import Image from "next/image";

export function CarouselDemo({ data }: { data: ApnadeshPros[] }) {
  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{
        align: "start",
        loop: true,
      }}
    //   plugins={[
    //     Autoplay({
    //       delay: 2000,
    //     }),
    //   ]}
    >
      <CarouselContent>
        {data?.map((e) => {
          return (
            <CarouselItem key={e.id}>
              {e?.url && (
                <Image
                  className=" max-h-[400px] w-full"
                  src={e.url}
                  height={e.height}
                  width={e.width}
                //   alt={e.url}
                alt="lkjg"
                />
              )}
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
