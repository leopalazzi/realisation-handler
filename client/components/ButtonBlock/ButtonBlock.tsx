import MosaicViewIcon from "../Icons/MosaicViewIcon";
import ListViewIcon from "../Icons/ListViewIcon";
import MosaicViewOffIcon from "../Icons/MosaicViewOffIcon";
import ListViewOffIcon from "../Icons/ListViewOffIcon";
import { useState } from "react";

const ButtonBlock = (props: any) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { setBtnClicked, btnClicked } = props;

  return (
    <div className="flex">
      <div className={`buttonBlockBackground ${isAnimated && btnClicked === "listView" ? "slide-background-to-right" : "" } ${isAnimated && btnClicked === "mosaicView" ? "slide-background-to-left" : "" }`}></div>
      <button
        onClick={() => {setBtnClicked("mosaicView");setIsAnimated(true); }}
        style={{
          borderRadius: "0 10px 10px 0",
        }}
        className={`buttonDouble`}
        role="button"
        aria-label="Vue en mode images"
      >
        {btnClicked === "mosaicView" ? (
          <MosaicViewIcon />
        ) : (
          <MosaicViewOffIcon />
        )}
      </button>
      <button
        onClick={() => {setBtnClicked("listView"); setIsAnimated(true)}}
        style={{
          borderRadius: "10px 0px 0px 10px",
        }}
        className={`buttonDouble`}
        role="button"
        aria-label="Vue en mode liste"
      >
        {btnClicked === "listView" ? <ListViewIcon /> : <ListViewOffIcon />}
      </button>
    </div>
  );
};

export default ButtonBlock;
