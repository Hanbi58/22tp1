import classes from "./bonus.module.css";
import { Kawagarbo, Team, BonusBg } from "../../assets/bonus";
function Bonus() {
  return (
    <div className={classes.bonusContainer}>
      <img src={BonusBg} alt="" className={classes.bonusBg} />
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.leftTile}>
            <p>Bonus from Designer</p>
            <p>A virgin peak that refuses any footstamp.</p>
            <p>
              One of the most sacred mountains for Tibetan Buddhism as the
              spiritual home of a warrior god of the same name. Kawagebo means
              'The Sacred White Snowy Mountain'. Kawagarbo and the surrounding
              peaks had seen previous climbing attempts by the Americans and
              Japanese, but no one was ever able to summit. Unfavorable weather
              and avalanches had turned each climb back.
            </p>
          </div>
          <div
            className={classes.leftImg}
            style={{
              background: `no-repeat  center/150% url(${Kawagarbo})`,
            }}
          >
            <div className={classes.textContainer}>
              <div>
                <div className={classes.name}>Kawagarbo</div>
                <div className={classes.text}>
                  <div>
                    6740 <span>m</span>
                  </div>
                  <div>
                    22110 <span>ft</span>
                  </div>
                </div>
                <div className={classes.height}>Height above see level</div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.vrBox}></div>
        <div className={classes.right}>
          <div
            className={classes.rightImg}
            style={{
              background: `no-repeat center 30%/cover url(${Team})`,
            }}
          ></div>
          <div className={classes.rightTile}>
            <p>
              The worst-ever mountaineering tragedies occurred not in the
              Himalaya or the Karakorum, but in an obscure range east of Tibet.
              The 1991 Kawagarbo tragedy cost 17 lives. Seven years later, three
              local shepherds found some of the group's gear. In 1999, 4,000m
              away from their last known location, the bodies of 16 of the 17
              climbers were found.
            </p>
          </div>
          <div className={classes.rightText}>
            <h2>Where the shepherds stopped</h2>
            <p>
              At 4,500m, a stone wall is said to divide the residence of the
              warrior god from the rest of the world. For locals, it is a border
              that no human should cross. On December 28, 1990, they continued
              to climb, reaching where up to 240m below the summit.A sudden
              change in the weather forced them to retreat back to Camp 4.
              However, they did not want to return home without a summit. They
              decided that they were going to set up a fifth camp and attack the
              summit on January 3. Their last contact with Base Camp was at
              10:30 pm that day. On January 4, at around 6 am, those at Base
              Camp were waiting for the group to radio in. All the members had
              walkie-talkies, but these were turned off.In April,a search team
              was sent, but they recorded a whopping 48 avalanches pushed them
              back. In the town at the foot of the mountain, the locals recalled
              a legend: Those who disrespected the god of the mountain would
              have one more punishment after death. They would become prisoners
              of the mountain for seven years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bonus;
