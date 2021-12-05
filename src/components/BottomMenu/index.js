import "./style.css";
import Star from "../../svg/star";
import Compass from "../../svg/compass";
import Portal from "../../svg/portal";
function BottomMenu() {
  return (
    <div className="bottom-menu">
      <div className="content">
        <div className="sideItem">
          <Compass />
          <span>KEŞFET</span>
        </div>
        <div className="middleItem">
          <Portal />
        </div>
        <div className="sideItem">
          <Star />
          <span>DAHA CÜZDAN</span>
        </div>
      </div>
    </div>
  );
}
export default BottomMenu;
