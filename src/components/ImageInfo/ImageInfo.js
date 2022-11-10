import React from "react";
// import { useState } from "react";
import { motion } from "framer-motion";
import classes from "./imageInfo.module.css";
import Toggle from "./Toggle";

function ImageInfo({ listContentItem, isOpen, openHandler }) {
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
      >
        {/* <motion.div layout className={classes.child}></motion.div> */}
        {isOpen ? (
          <div className={classes.textContainer}>
            <div className={classes.textBox}>
              <div className={classes.title}>
                <p>Range</p>
                <span>Region </span>
              </div>
              <div className={classes.text}>
                <p>{listContentItem.range}</p>

                <span>{listContentItem.region}</span>
              </div>
            </div>
            <div className={classes.description}>
              {listContentItem.longDescription}
            </div>
          </div>
        ) : (
          ""
        )}
      </motion.div>
      <Toggle toggle={openHandler} isOpen={isOpen} />
    </div>
  );
}

export default ImageInfo;

// {listContentItem.longDescription}
// { listContentItem, isOpen, openHandler }
