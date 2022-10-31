import classes from "./landingImage.module.css";
import { useState } from "react";

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
  return (
    <div className={classes.container}>
      <div className={classes.mountainMain}></div>
      <div className={cloudTopCls}></div>
      <div className={cloudMidCls}></div>
      <div className={classes.mountainLeft}></div>
      <div className={classes.mountainRight}></div>
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
