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

var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  if (nums[0] > nums[1]) {
    return 0;
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1;
  }
  let left = 1;
  let right = nums.length - 2;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (nums[mid + 1] > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
