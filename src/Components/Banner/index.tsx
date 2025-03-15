import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { BannerData, sliderSettingsMain } from "Constants";
import { BannerSections } from "./BannerCards";

const Banner = () => {
  return (
    <Swiper {...sliderSettingsMain} className="mySwiper">
      {BannerData.map((item) => {
        return (
          <SwiperSlide>
            <BannerSections bannerData={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
