import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import classes from "./imageInfo.module.css";

function ImageInfo({ listContentItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { borderRadius: 0 },
    closed: {
      borderRadius: "40px",
      backgroundColor: "var(--color-circleBox-trans-high)",
    },
  };

  return (
    <div className={classes.imageInfoContainer}>
      <motion.div
        layout
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        data-isopen={isOpen}
        className={classes.parent}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <motion.div layout className={classes.child}></motion.div> */}
        {isOpen ? <div>{listContentItem.longDescription}</div> : ""}
      </motion.div>
    </div>
  );
}

export default ImageInfo;

// {listContentItem.longDescription}
