/* eslint-disable @next/next/no-img-element */
"use client";

import { SwiperCarousel } from "@ahmed-osama-salem/swiper-react-component";
import axios from "axios";
import { useEffect, useState } from "react";

const ShapeOne = ({
  item,
}: {
  item?: { id: number; urls: { raw: string } };
}) => {
  return (
    <div className="flex h-[250px] w-[250px] items-center justify-center bg-stone-300 rounded-full">
      <img
        alt="image"
        src={item?.urls.raw}
        className=" rounded-full object-cover w-full h-full"
      />
    </div>
  );
};

const SwiperWithApi = () => {
  const [data, setData] = useState([]);

  const getRandomData = async () => {
    const res = await axios
      .get(
        "https://api.unsplash.com/photos/?client_id=9dfwtUcXdaD9C3I6HXgAq-3R4Ceyry8mv9ryFvd54dA"
      )
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        return err;
      });

    return res;
  };

  useEffect(() => {
    getRandomData();
  }, []);

  return (
    <SwiperCarousel
      item={data}
      navigation
      slidesPerView={5}
      spaceBetween={2}
      direction="horizontal"
    >
      <ShapeOne />
    </SwiperCarousel>
  );
};

export default SwiperWithApi;
