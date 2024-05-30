import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="container bg-slate-300 py-2">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="first.jpg"
            alt="chapaibar first"
            className="object-cover w-full h-48 sm:h-64 md:h-80 lg:h-96"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="second.jpg"
            alt="chapaibar second"
            className="object-cover w-full h-48 sm:h-64 md:h-80 lg:h-96"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="third.jpg"
            alt="chapaibar third"
            className="object-cover w-full h-48 sm:h-64 md:h-80 lg:h-96"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
