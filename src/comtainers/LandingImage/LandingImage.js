import classes from "./landingImage.module.css";

function LandingImage() {
  return (
    <div className={classes.container}>
      <div className={classes.mountainMain}></div>
      <div className={classes.cloudTop}></div>
      <div className={classes.cloudMid}></div>
      <div className={classes.mountainLeft}></div>
      <div className={classes.mountainRight}></div>
      <div className={classes.cloudBottom}></div>
    </div>
  );
}

export default LandingImage;
