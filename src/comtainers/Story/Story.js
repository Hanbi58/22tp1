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
          <h2>List of world's highest peaks</h2>
          <p>
            Almost all mountains in the list are located in the Himalaya and
            Karakoram ranges to the south and west of the Tibetan plateau. All
            peaks 7,000 m (23,000 ft) or higher are located in East, Central or
            South Asia in a rectangle edged by Noshaq (7,492 m or 24,580 ft) on
            the Afghanistan–Pakistan border in the west, Jengish Chokusu
            (Tuōmù'ěr Fēng, 7,439 m or 24,406 ft) on the Kyrgyzstan–Xinjiang
            border to the north, Gongga Shan (Minya Konka, 7,556 m or 24,790 ft)
            in Sichuan to the east, and Kabru (7,412 m or 24,318 ft) on the
            Sikkim–Nepal border to the south. As of December 2018, the highest
            peaks on four of the mountains — Gangkhar Puensum, Labuche Kang III,
            Karjiang, and Tongshanjiabu, all located in Bhutan or China — have
            not been ascended. The most recent peak to have its first ever
            ascent is Saser Kangri II East, in India, on 24 August 2011. Whether
            you’re planning your next adventure or are simply looking for a bit
            of inspiration from the natural world, nothing inspires one’s
            wanderlust quite like the world’s tallest mountains. These mountains
            are as beautiful as they are daunting for climbing enthusiasts. Each
            presents a unique set of charms and challenges for explorers. Feed
            your travel bug (and brush up on your Himalayan geography) with the
            top 10 list of the highest mountains in the world.
          </p>
        </div>
        <div className={classes.vrBox}></div>
        <div className={classes.imageBox}>
          <div className={classes.georgeBg}></div>

          <p>
            Quick intro to a hero mountaineer who took part in the first three
            British expeditions to Mount Everest in the early 1920s. Once asked
            by a reporter why he wanted to climb Everest, the one famously
            replied:
          </p>
          <p>"Because it’s there."</p>
          <p>
            <span>G</span>eorge Mallory
          </p>
          <img className={classes.george} src={george} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Story;
