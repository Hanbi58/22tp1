import classes from "./bonus.module.css";

function Bonus() {
  return (
    <div className={classes.bonusContainer}>
      <div className={classes.left}></div>
      <div className={classes.bar}></div>
      <div className={classes.right}></div>
    </div>
  );
}

export default Bonus;
