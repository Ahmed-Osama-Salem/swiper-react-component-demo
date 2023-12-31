/* eslint-disable @next/next/no-img-element */
import { SwiperCarousel } from "@ahmed-osama-salem/swiper-react-component";
interface ShapOneProps {
  item?: { id: number };
}

// THIS IS YOUR SWIPERSLIDE COMPONENT THAT AUTOMATICALLY READ EVERY OBJECT OF YOUR DATA AS item prop
// YOU CAN CUSTOMIZE YOUR OWN
const ShapeOne = (props: ShapOneProps) => {
  return (
    <div className="flex h-[250px] w-[100%] items-center justify-center bg-stone-300 rounded-lg ">
      {props.item?.id}
    </div>
  );
};

const SwiperPagination = () => {
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
      >
        <ShapeOne />
      </SwiperCarousel>
    </div>
  );
};

export default SwiperPagination;
