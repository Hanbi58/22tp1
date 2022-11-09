import classes from "./listImage.module.css";
import ImageInfo from "../ImageInfo/ImageInfo";
function ListImage({ listContentItem }) {
  return (
    <>
      <div
        className={classes.bg}
        style={{
          background: ` no-repeat  center/cover url(${listContentItem.imageUrl})`,
        }}
      >
        <ImageInfo listContentItem={listContentItem} />
      </div>
    </>
  );
}

export default ListImage;
