import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiperStyle.css";
import classes from "./list.module.css";
import { listContent } from "../../assets/listContent/ListContent";
import { ListImage, Carousal, ListInfo } from "../../components";
import { EffectFade, EffectCoverflow, Pagination, Thumbs } from "swiper";
import { useState } from "react";
const imageSwipers = listContent.map((listContentItem) => (
  <SwiperSlide key={listContentItem.id}>
    <ListImage listContentItem={listContentItem} />
  </SwiperSlide>
));
const infoSwipers = listContent.map((listContentItem) => (
  <SwiperSlide key={listContentItem.id}>
    <ListInfo listContentItem={listContentItem} />
  </SwiperSlide>
));
const carousalSwipers = listContent.map((listContentItem) => (
  <SwiperSlide key={listContentItem.id}>
    <Carousal listContentItem={listContentItem} />
  </SwiperSlide>
));
function List() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [infoSwiper, setInfoSwiper] = useState(null);

  const pagination = {
    // dynamicBullets: true,
    clickable: true,
    renderBullet: function (index, className) {
      let rankNum = index + 1 < 10 ? "0" + (index + 1) : index + 1;
      return '<div class="' + className + '">' + rankNum + "</div>";
    },
  };

  return (
    <main className={classes.listContainer} id="rank">
      <Swiper
        className={classes.imageSwiper}
        modules={[EffectFade, Thumbs]}
        effect={"fade"}
        simulateTouch={false}
        loop={true}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress={true}
      >
        {imageSwipers}
      </Swiper>
      <Swiper
        className={classes.infoSwiper}
        modules={[Thumbs]}
        simulateTouch={false}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        onSwiper={setInfoSwiper}
        watchSlidesProgress={true}
        direction={"vertical"}
      >
        {infoSwipers}
      </Swiper>
      <div className={classes.carouselContainer}>
        <Swiper
          className={classes.carouselSwiper}
          modules={[EffectCoverflow, Thumbs, Pagination]}
          pagination={pagination}
          effect={"coverflow"}
          grabCursor={true}
          watchSlidesProgress={true}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={-100}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 350,
            modifier: 1.5,
            slideShadows: true,
          }}
          loop={true}
          breakpoints={{
            // allows for different parameters to be set for responsiveness
            300: {},
          }}
          thumbs={{ swiper: infoSwiper }}
        >
          {carousalSwipers}
        </Swiper>
      </div>
    </main>
  );
}

export default List;
