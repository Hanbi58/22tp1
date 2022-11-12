import classes from "./bonus.module.css";
import { Kawagarbo, Team, BonusBg } from "../../assets/bonus";
function Bonus() {
  return (
    <div className={classes.bonusContainer}>
      <img src={BonusBg} alt="" className={classes.bonusBg} />
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.leftTile}></div>
          <div className={classes.leftImg}></div>
        </div>
        <div className={classes.vrBox}></div>
        <div className={classes.right}>
          <div className={classes.leftImg}></div>
          <div className={classes.leftTile}></div>
          <div className={classes.leftText}></div>
        </div>
      </div>
    </div>
  );
}

export default Bonus;
