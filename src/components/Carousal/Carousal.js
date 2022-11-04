function Carousal(props) {
  return (
    <div class="swiper-slide">
      <div class="picture">
        <img src={props.imgurl} alt="" />
      </div>
      ;
      <div class="detail">
        <h3>Marie Edwards</h3>
        <span>Web Designer</span>
      </div>
    </div>
  );
}

export default Carousal;
