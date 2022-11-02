import classes from "./story.module.css";
import { default as george } from "../../assets/story/george.jpg";
import { default as storyBg } from "../../assets/story/storyBg.png";
function Story() {
  return (
    <div className={classes.storyContainer}>
      <img src={storyBg} alt="" className={classes.storyBg} />
      <div className={classes.content}>
        <div className={classes.textBox}>
          <h1>Geographical Destribution</h1>
          <h2>Get ready for Expedition</h2>
          <p>
            &ensp;&ensp;&ensp;&ensp; Ask 100 people in the world to name a
            mountain, and most will say Mount Everest. A lot of people also know
            that the second highest mountain in the world is K2, on the
            China-Pakistan border, but far fewer know that the third highest
            mountain in the world is called Kangchenjunga. Or how to spell that.
            It’s not quite as simple as ‘K2’, that’s for sure. So, how many of
            the highest mountains in the world do you really know? Freezing
            weather, thin air, avalanches ... there’s a reason why climbers
            spend years training to tackle the world’s highest peaks. These
            massive mountains can be formed by volcanic explosions as well as
            tectonic faults and collisions, some of which may have started
            reshaping the Earth’s surface over 3.75 billion years ago.
            <br />
            <br />
            &ensp;&ensp;&ensp;&ensp;Whether you’re planning your next adventure
            or are simply looking for a bit of inspiration from the natural
            world, nothing inspires one’s wanderlust quite like the world’s
            tallest mountains. These mountains are as beautiful as they are
            daunting for climbing enthusiasts. Each presents a unique set of
            charms and challenges for explorers. Feed your travel bug (and brush
            up on your Himalayan geography) with the top 10 list of the highest
            mountains in the world.
          </p>
        </div>
        <div className={classes.vrBox}></div>
        <div className={classes.imageBox}>
          <div className={classes.georgeBg}>
            <p>
              &ensp; Quick introduction to a hero mountaineer who took part in
              the first three British expeditions to Mount Everest in the early
              1920s. Once asked by a reporter why he wanted to climb Everest,
              the one famously replied:
            </p>
            <p>"Because it’s there."</p>
          </div>

          <p className={classes.georgeName}>
            <span>G</span>eorge Mallory
          </p>
          <img className={classes.george} src={george} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Story;
