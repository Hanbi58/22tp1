import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classes from "./imageInfo.module.css";

function ImageInfo({ listContentItem }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let timeout;
    if (isOpen) {
      timeout = setTimeout(() => setIsOpen(false), 15000);
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);
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
