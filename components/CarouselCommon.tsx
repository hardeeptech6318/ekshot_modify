


import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";
  import { ApnadeshPros } from "@/constant/apnadesh";
  import Image from "next/image";

function CarouselCommon({ data }: { data: ApnadeshPros[] }) {
  return (
    <Carousel
      className="w-full max-w-xs">
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
                  alt={e.url}
                />
              )}
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  )
}

export default CarouselCommon