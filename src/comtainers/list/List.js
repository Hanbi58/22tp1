import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { listContent } from "../../assets/listContent/ListContent";
import classes from "./list.module.css";
import { ListImage } from "../../components";

const imageSwipers = listContent.map((listContent) => (
  <SwiperSlide>
    <ListImage listContent={listContent} />
  </SwiperSlide>
));
function List() {
  return (
    <main className={classes.listContainer} id="rank">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {imageSwipers}
      </Swiper>
    </main>
  );
}

export default List;
