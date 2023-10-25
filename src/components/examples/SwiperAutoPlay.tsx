/* eslint-disable @next/next/no-img-element */
import { SwiperCarousel } from "@ahmed-osama-salem/swiper-react-component";
import { Autoplay } from "swiper/modules";

const ShapeOne = ({ item }: { item?: { id: number } }) => {
  return (
    <div className="flex h-[250px] w-[100%] items-center justify-center bg-stone-300 rounded-lg ">
      {item?.id}
    </div>
  );
};

const SwiperAutoPlay = () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  return (
    <div className="w-full">
      <SwiperCarousel
        item={data}
        slidesPerView={1}
        spaceBetween={2}
        direction="horizontal"
        swiperContainerClass="w-[80%]"
        swiperProps={{
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          modules: [Autoplay],
        }}
      >
        <ShapeOne />
      </SwiperCarousel>
    </div>
  );
};

export default SwiperAutoPlay;
