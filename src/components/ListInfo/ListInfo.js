import classes from "./listInfo.module.css";

function ListInfo({ listContentItem }) {
  return (
    <div className={classes.info}>
      {/* <div className={classes.rankNumber}>{listContentItem.id}</div> */}
      <div className={classes.name}>
        {listContentItem.mountainName.toUpperCase()}
      </div>
      <div className={classes.textContainer}>
        <div className={classes.rankNumber}>{listContentItem.id}</div>
        <div className={classes.heightInfo}>
          <div className={classes.text}>
            <div>
              {listContentItem.heightMeters} <span>m</span>
            </div>
            <div>
              {listContentItem.heightFeet} <span>ft</span>
            </div>
          </div>
          <div className={classes.height}>Height above see level</div>
        </div>
      </div>
      <p>{listContentItem.shortDescription}</p>
    </div>
  );
}

export default ListInfo;
