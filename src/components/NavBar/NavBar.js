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

var rob = function (nums) {
  const pocket = { single: 0, double: 0 };
  const edge = nums[0] + nums[nums.length - 1];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      pocket.double += nums[i];
    } else {
      pocket.single += nums[i];
    }
  }
  return Math.max(pocket.single, pocket.double, edge);
};
