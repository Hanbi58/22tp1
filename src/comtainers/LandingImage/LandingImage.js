import { backgroundImg, sky } from "../../assets/landingImages";

function LandingImage() {
  return (
    <div>
      <div>
        <img src={backgroundImg} alt="" />
      </div>
      <div>
        <img src={sky} alt="" />
      </div>
    </div>
  );
}

export default LandingImage;
