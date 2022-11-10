import classes from "./imageInfo.module.css";
function Toggle({ toggle, isOpen }) {
  const barOneClass = isOpen
    ? `${classes.barOne} ${classes.open}`
    : `${classes.barOne}`;
  const barTwoClass = isOpen
    ? `${classes.barTwo} ${classes.open}`
    : `${classes.barTwo}`;
  return (
    <div onClick={toggle} className={classes.toggleContainer}>
      <div className={barOneClass}></div>
      <div className={barTwoClass}></div>
    </div>
  );
}

export default Toggle;
