/* eslint-disable @next/next/no-img-element */
"use client";

import SwiperAutoPerView from "@/components/examples/SwiperAutoPerView";
import SwiperAutoPlay from "@/components/examples/SwiperAutoPlay";
import SwiperCenteredAuto from "@/components/examples/SwiperCenteredAuto";
import SwiperDefualt from "@/components/examples/SwiperDefualt";
import SwiperDynamicPagination from "@/components/examples/SwiperDynamicPagination";
import SwiperPagination from "@/components/examples/SwiperPagination";
import SwiperPaginationProgress from "@/components/examples/SwiperPaginationProgress";
import SwiperVertical from "@/components/examples/SwiperScrollBar";
import SwiperWithApi from "@/components/examples/SwiperWithApi";
import SwiperWithStatic from "@/components/examples/SwiperWithStatic";
import "swiper/css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white gap-24">
      <h3 className="text-6xl text-black font-medium mb-20">
        Swiper-React-Component
      </h3>
      <div className="w-[100%] flex flex-col gap-40">
        <div className="w-full space-y-8">
          <p className="text-4xl text-black font-medium">Swiper With Api</p>
          <SwiperWithApi />
        </div>
        <div className="w-full space-y-8">
          <p className="text-4xl text-black font-medium">Swiper With Static</p>
          <SwiperWithStatic />
        </div>
        <div className="w-full space-y-8">
          <p className="text-4xl text-black font-medium">Defualt</p>
          <SwiperDefualt />
        </div>
        <div className="w-full space-y-8">
          <p className="text-4xl text-black font-medium">Pagination</p>
          <SwiperPagination />
        </div>
        <div className="w-full space-y-8">
          <p className="text-4xl text-black font-medium">Dynamic Pagination</p>
          <SwiperDynamicPagination />
        </div>
        <div className="w-full space-y-8">
          <p className="text-4xl text-black font-medium">Pagination Progress</p>
          <SwiperPaginationProgress />
        </div>
        <div className="w-full space-y-8">
          <p className="text-4xl text-black font-medium">Vertical</p>
          <SwiperVertical />
        </div>
        <div className="w-full space-y-8">
          <p className="text-4xl text-black font-medium">Auto Per View</p>
          <SwiperAutoPerView />
        </div>
        <div className="w-full space-y-8">
          <p className="text-4xl text-black font-medium">Centered Auto</p>
          <SwiperCenteredAuto />
        </div>
        <div className="w-full space-y-8">
          <p className="text-4xl text-black font-medium">Auto Play</p>
          <SwiperAutoPlay />
        </div>
      </div>
    </main>
  );
}
