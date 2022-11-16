import classes from "./carousal.module.css";

function Carousal({ listContentItem }) {
  return (
    <div
      className={classes.bg}
      style={{
        background: ` no-repeat center top/cover url(${listContentItem.smallImageUrl})`,
      }}
    >
      <div className={classes.tabContainer}></div>
    </div>
  );
}

export default Carousal;
