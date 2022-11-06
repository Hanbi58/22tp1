import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";

import { listContent } from "../../assets/listContent/ListContent";
import classes from "./list.module.css";
import { ListImage, Carousal } from "../../components";
import { EffectFade, EffectCoverflow } from "swiper";

const imageSwipers = listContent.map((listContentItem) => (
  <SwiperSlide key={listContentItem.id}>
    <ListImage listContentItem={listContentItem} />
  </SwiperSlide>
));
const carousalSwipers = listContent.map((listContentItem) => (
  <SwiperSlide key={listContentItem.id}>
    <Carousal listContentItem={listContentItem} />
  </SwiperSlide>
));
function List() {
  return (
    <main className={classes.listContainer} id="rank">
      <Swiper
        className={classes.imageSwiper}
        modules={[EffectFade]}
        effect="fade"
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {imageSwipers}
      </Swiper>
      <div className={classes.carouselContainer}>
        <Swiper
          className={classes.carouselSwiper}
          modules={[EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          watchSlidesProgress={true}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={-100}
          coverflowEffect={{
            rotate: 20,
            stretch: 100,
            depth: 350,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {carousalSwipers}
        </Swiper>
      </div>
    </main>
  );
}

export default List;
