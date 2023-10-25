/* eslint-disable @next/next/no-img-element */
import { SwiperCarousel } from "@ahmed-osama-salem/swiper-react-component";

const ShapeOne = ({ item }: { item?: { id: number } }) => {
  return (
    <div className="flex h-[250px] w-[90%] items-center justify-center bg-stone-300 rounded-lg ">
      {item?.id}
    </div>
  );
};

const SwiperCenteredAuto = () => {
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
        spaceBetween={10}
        direction="horizontal"
        swiperContainerClass="w-[80%]"
        swiperSlideClass="!w-[70%]"
        swiperProps={{ slidesPerView: "auto", centeredSlides: true }}
      >
        <ShapeOne />
      </SwiperCarousel>
    </div>
  );
};

export default SwiperCenteredAuto;
