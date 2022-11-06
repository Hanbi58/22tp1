import classes from "./listImage.module.css";

function ListImage({ listContentItem }) {
  return (
    <>
      <div
        className={classes.bg}
        style={{
          background: ` no-repeat  center/cover url(${listContentItem.imageUrl})`,
        }}
      >
        {listContentItem.imageUrl}
      </div>
    </>
  );
}

export default ListImage;
