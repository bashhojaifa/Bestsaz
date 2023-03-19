import { EffectFade } from "swiper";
import Swiper, { SwiperSlide } from "./swiper";
import heroSliderData from "./hero-slider-one.json";
import HeroSliderOneSingle from "./HeroSliderOneSingle.js";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
};

const Slider = () => {
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        {heroSliderData && (
          <Swiper options={params}>
            {heroSliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderOneSingle data={single} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Slider;
