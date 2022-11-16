import classes from "./carousal.module.css";
import { motion } from "framer-motion";

function Carousal({ listContentItem, isOpen, openHandler }) {
  const textClass = isOpen
    ? `${classes.textContainer} ${classes.textContainerOpen}`
    : `${classes.textContainer}`;
  const tabClass = isOpen
    ? `${classes.tabContainer} ${classes.tabContainerOpen}`
    : `${classes.tabContainer}`;
  return (
    <div
      className={classes.bg}
      style={{
        background: ` no-repeat center top/cover url(${listContentItem.smallImageUrl})`,
      }}
    >
      <div className={textClass}>
        <div className={classes.textBox}>
          <p>{listContentItem.range}</p>
          <span>{listContentItem.region}</span>
        </div>
        <div className={classes.description}>
          {listContentItem.longDescription}
        </div>
      </div>

      <motion.div
        className={tabClass}
        drag
        dragSnapToOrigin={true}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={openHandler}
      >
        <div className={classes.dragDot}>
          <div className={classes.dragDotBar}></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Carousal;
