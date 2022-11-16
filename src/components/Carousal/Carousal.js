import classes from "./carousal.module.css";
import { motion } from "framer-motion";

function Carousal({ listContentItem }) {
  return (
    <div
      className={classes.bg}
      style={{
        background: ` no-repeat center top/cover url(${listContentItem.smallImageUrl})`,
      }}
    >
      <motion.div
        className={classes.tabContainer}
        drag="y"
        dragSnapToOrigin={true}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragStart={() => console.log("hahaha")}
      >
        <div className={classes.dragDot}>
          <div className={classes.dragDotBar}></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Carousal;
