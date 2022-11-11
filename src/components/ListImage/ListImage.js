import classes from "./listImage.module.css";
import ImageInfo from "../ImageInfo/ImageInfo";
import { useRef } from "react";
function ListImage({ listContentItem, isOpen, openHandler }) {
  const scrollRef = useRef(null);
  const executeScroll = () =>
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      top: scrollRef.current.offsetTop,
    });
  return (
    <>
      <div
        onClick={executeScroll}
        ref={scrollRef}
        className={classes.bg}
        style={{
          background: ` no-repeat  center/cover url(${listContentItem.imageUrl})`,
        }}
      >
        <ImageInfo
          listContentItem={listContentItem}
          isOpen={isOpen}
          openHandler={openHandler}
        />
      </div>
    </>
  );
}

export default ListImage;
