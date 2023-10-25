/* eslint-disable @next/next/no-img-element */
import { SwiperCarousel } from "@ahmed-osama-salem/swiper-react-component";

const ShapeOne = ({ item }: { item?: { id: number } }) => {
  return (
    <div className="flex h-full w-[100%] items-center justify-center bg-stone-300 rounded-lg ">
      {item?.id}
    </div>
  );
};

const SwiperVertical = () => {
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
        pagination
        direction="vertical"
        swiperContainerClass="w-[80%] h-[250px]"
        swiperProps={{ pagination: { clickable: true } }}
      >
        <ShapeOne />
      </SwiperCarousel>
    </div>
  );
};

export default SwiperVertical;
