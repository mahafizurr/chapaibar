import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="first.jpg"
            alt="chapaibar first"
            className="object-cover w-full md:w-96 lg:w-96 h-48 md:h-auto lg:h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="second.jpg"
            alt="chapaibar first"
            className="object-cover w-full md:w-96 lg:w-96 h-48 md:h-auto lg:h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="third.jpg"
            alt="chapaibar first"
            className="object-cover w-full md:w-96 lg:w-96 h-48 md:h-auto lg:h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
