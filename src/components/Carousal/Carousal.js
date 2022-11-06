import classes from "./carousal.module.css";

function Carousal({ listContentItem }) {
  return (
    <div
      className={classes.bg}
      style={{
        background: ` no-repeat top center/cover url(${listContentItem.smallImageUrl})`,
      }}
    >
      {listContentItem.smallImageUrl}
    </div>
  );
}

export default Carousal;
