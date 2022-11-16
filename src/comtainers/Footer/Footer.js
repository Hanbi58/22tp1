import classes from "./footer.module.css";
import { motion } from "framer-motion";
function Footer() {
  return (
    <div className={classes.footer}>
      <motion.div
        className={classes.quote}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <p>We never conquered a mountain.</p>
        <p>Nature used to accept us.</p>
      </motion.div>
      <motion.div
        className={classes.logoContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className={classes.truthlogo}></div>
        <div className={classes.lastWords}>
          <p>A Truth production</p>
          <p>Image credits to original author.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
