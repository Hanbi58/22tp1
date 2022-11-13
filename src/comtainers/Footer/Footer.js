import classes from "./footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.quote}>
        <p>We never conquered a mountain.</p>
        <p>Nature used to accept us.</p>
      </div>
      <div className={classes.logoContainer}>
        <div className={classes.truthlogo}></div>
        <div className={classes.lastWords}>
          <p>A Truth production</p>
          <p>Image credits to original author.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
