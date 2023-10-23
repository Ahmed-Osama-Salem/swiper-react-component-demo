/* eslint-disable @next/next/no-img-element */
import { SwiperCarousel } from "@ahmed-osama-salem/swiper-react-component";

const ShapeOne = ({ item }: { item?: { id: number } }) => {
  return (
    <div className="flex h-[250px] w-[100%] items-center justify-center bg-stone-300 rounded-lg ">
      {item?.id}
    </div>
  );
};

const SwiperPaginationProgress = () => {
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
        pagination
        spaceBetween={2}
        direction="horizontal"
        swiperContainerClass="w-[80%]"
        swiperProps={{ pagination: { type: "progressbar" } }}
      >
        <ShapeOne />
      </SwiperCarousel>
    </div>
  );
};

export default SwiperPaginationProgress;
