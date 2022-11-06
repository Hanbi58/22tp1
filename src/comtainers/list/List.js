import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { listContent } from "../../assets/listContent/ListContent";
import classes from "./list.module.css";
import { ListImage, Carousal } from "../../components";

const imageSwipers = listContent.map((listContentItem) => (
  <SwiperSlide key={listContentItem.id}>
    <ListImage listContent={listContentItem} />
  </SwiperSlide>
));
const carousalSwipers = listContent.map((listContentItem) => (
  <SwiperSlide key={listContentItem.id}>
    <Carousal listContent={listContentItem} />
  </SwiperSlide>
));
function List() {
  return (
    <main className={classes.listContainer} id="rank">
      <Swiper
        className={classes.imageSwiper}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {imageSwipers}
      </Swiper>
      <Swiper
        className={classes.imageSwiper}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {carousalSwipers}
      </Swiper>
    </main>
  );
}

export default List;
