function Carousal({ listContentItem }) {
  return (
    <div
      style={{
        background: ` no-repeat  center/cover url(${listContentItem.smallImageUrl})`,
      }}
    >
      {listContentItem.smallImageUrl}
    </div>
  );
}

export default Carousal;
