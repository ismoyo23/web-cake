import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// component
import { Images } from "../atoms/images";
export let SlideMolecules = () => {
  return (
    <>
      <div className="ml-[20px] mr-[20px] mt-[20px]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Images type="medium" image={require("../../assets/cake1.jpg")} />
          </SwiperSlide>

          <SwiperSlide>
            <Images type="medium" image={require("../../assets/cake2.jpeg")} />
          </SwiperSlide>
          <SwiperSlide>
            <Images type="medium" image={require("../../assets/cake3.jpg")} />
          </SwiperSlide>

          <SwiperSlide>
            <Images type="medium" image={require("../../assets/cake4.jpg")} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
