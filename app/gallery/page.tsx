import { gallery } from "@/constant/gallery";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function page() {
  return (
    <section className=" container ">
      <h2 className=" text-3xl font-bold py-5 text-center">Gallery</h2>
      <div>
        <Tabs defaultValue="all" className=" my-10">
          <TabsList className=" mx-auto p-10 flex justify-center items-center gap-5">
            <TabsTrigger className=" p-5" value="all">
              All
            </TabsTrigger>
            <TabsTrigger className=" p-5" value="ganesh_2022">
              Ganesh Chaturthi@2022
            </TabsTrigger>
            <TabsTrigger className=" p-5" value="navratri_2022">
              Navratri@2022
            </TabsTrigger>
            <TabsTrigger className=" p-5" value="onam_2022">
              Onam Celebration
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className=" columns-3xs ">
              {gallery.map((e) => (
                <div className="grid place-content-center py-2 " key={e.id}>
                  <Image
                    className=" rounded-xl"
                    src={e.url}
                    height={e.height}
                    width={e.width}
                    alt="lkaghfd"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ganesh_2022">
            <div className=" columns-3xs ">
              {gallery
                .filter((e) => e.type === "ganesh_2022")
                .map((e) => (
                  <div className="grid place-content-center py-2 " key={e.id}>
                    <Image
                      className=" rounded-xl"
                      src={e.url}
                      height={e.height}
                      width={e.width}
                      alt="lkaghfd"
                    />
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="navratri_2022">
            <div className=" columns-3xs ">
              {gallery
                .filter((e) => e.type === "navratri_2022")
                .map((e) => (
                  <div className="grid place-content-center py-2 " key={e.id}>
                    <Image
                      className=" rounded-xl"
                      src={e.url}
                      height={e.height}
                      width={e.width}
                      alt="lkaghfd"
                    />
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="onam_2022">
            <div className=" columns-3xs ">
              {gallery
                .filter((e) => e.type === "onam_2022")
                .map((e) => (
                  <div className="grid place-content-center py-2 " key={e.id}>
                    <Image
                      className=" rounded-xl"
                      src={e.url}
                      height={e.height}
                      width={e.width}
                      alt="lkaghfd"
                    />
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default page;
