import classes from "./landingImage.module.css";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function LandingImage() {
  const [slowDown, setSlowDown] = useState(false);
  const mouseEnterHandler = () => {
    setSlowDown(true);
  };
  const mouseLeaveHandler = () => {
    setSlowDown(false);
  };
  const cloudMidCls = slowDown
    ? `${classes.cloudMid} ${classes.slowdown}`
    : `${classes.cloudMid}`;
  const cloudTopCls = slowDown
    ? `${classes.cloudTop} ${classes.slowdown}`
    : `${classes.cloudTop}`;
  const cloudBottomCls = slowDown
    ? `${classes.cloudBottom} ${classes.slowdown}`
    : `${classes.cloudBottom}`;
  const headerRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  return (
    <div className={classes.container}>
      <div className={classes.mountainMain} ref={headerRef}></div>
      <div className={cloudTopCls}></div>
      <div className={cloudMidCls}></div>
      <motion.div style={{ y }} className={classes.mountainLeft}></motion.div>
      <motion.div style={{ y }} className={classes.mountainRight}></motion.div>
      <div className={cloudBottomCls}></div>

      <p
        className={classes.titleFirst}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        TOP PEAKS
      </p>

      <p className={classes.explore}>Explore roof of the world.</p>
    </div>
  );
}

export default LandingImage;
