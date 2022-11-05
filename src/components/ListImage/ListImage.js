import classes from "./listImage.module.css";

function ListImage({ listContent }) {
  return (
    <>
      <div
        className={classes.bg}
        style={{
          background: ` no-repeat center/cover url(${listContent.imageUrl})`,
        }}
      >
        {listContent.imageUrl}
      </div>
    </>
  );
}

export default ListImage;
