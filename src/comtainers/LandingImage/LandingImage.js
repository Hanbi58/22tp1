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

      <p className={classes.titleFirst}>TOP PEAKS</p>

      <p className={classes.explore}>Explore Roof of the world.</p>
    </div>
  );
}

export default LandingImage;
