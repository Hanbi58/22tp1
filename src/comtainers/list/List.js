import { Swiper, SwiperSlide, useSwiper,useSwiperSlide  } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';
import classes from "./list.module.css";
import { listContent } from "../../assets/listContent/ListContent";
import { ListImage, Carousal } from "../../components";
import { EffectFade, EffectCoverflow, Controller, Pagination,Thumbs  } from "swiper";
import { useState, useRef } from "react";

const imageSwipers = listContent.map((listContentItem) => (

  <SwiperSlide key={listContentItem.id}>
    <ListImage listContentItem={listContentItem} />
  </SwiperSlide>
));
const carousalSwipers = listContent.map((listContentItem) => (
  
  <SwiperSlide key={listContentItem.id} >
    
    <Carousal listContentItem={listContentItem} />
  </SwiperSlide>
));
function List() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
      <div className={classes.carouselContainer}>
        <Swiper
           pagination={{ clickable: true }}
          className={classes.carouselSwiper}
          modules={[EffectCoverflow,Pagination,Thumbs]}
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
          thumbs={{ swiper: thumbsSwiper }}
          
        >
          {carousalSwipers}
        </Swiper>
      </div>
    </main>
  );
}

export default List;