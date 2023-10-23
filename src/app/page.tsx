/* eslint-disable @next/next/no-img-element */
"use client";

import SwiperDefualt from "@/components/examples/SwiperDefualt";
import SwiperDynamicPagination from "@/components/examples/SwiperDynamicPagination";
import SwiperPagination from "@/components/examples/SwiperPagination";
import SwiperPaginationProgress from "@/components/examples/SwiperPaginationProgress";
import SwiperWithApi from "@/components/examples/SwiperWithApi";
import SwiperWithStatic from "@/components/examples/SwiperWithStatic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white gap-11">
      <h3 className="text-6xl text-black font-medium">
        Swiper-React-Component
      </h3>
      <SwiperDefualt />
      <SwiperPagination />
      <SwiperDynamicPagination />
      <SwiperPaginationProgress />
      <SwiperWithApi />
      <SwiperWithStatic />
    </main>
  );
}
