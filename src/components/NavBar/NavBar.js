import classes from "./navBar.module.css";

function NavBar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.truthlogo}></div>
      <div className={classes.bigLinks}>
        <a href="#top">Home</a>
        <a href="#story">Story</a>
        <a href="#rank">Rank</a>
      </div>
    </div>
  );
}

export default NavBar;
