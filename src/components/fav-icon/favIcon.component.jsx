import React from "react";
import { ReactComponent as Favourites } from "../../assests/favIcon.svg";
import "../fav-icon/favIcon.styles.scss";
import { useSelector } from "react-redux";
import { selectFavouriteCount } from "../../store/favourites/favourties.selector";

const FavIcon = () => {
  const favCount = useSelector(selectFavouriteCount);
  return (
    <div className="favIcon_container">
      <Favourites className="favIcon" />

      {favCount !== 0 && <span>{favCount}</span>}
    </div>
  );
};

export default FavIcon;
