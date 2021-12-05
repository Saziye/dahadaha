import "./style.css";
import moment from "moment";
import Background from "../../svg/card.js";

function Card({ item }) {
    console.log({ item });
    const diff = moment.duration(moment(item.Enddate).diff(moment()));
    const month = diff.months();
  return (
    <a className="card" href={`kampanya/${item.PromotionName}/${item.PromotionID}`}>
      <div className="content">
        <div className="logo">
          <img className="logo" src={item.ImgUrl}></img>
          <img
            className="brand-logo"
            src={item.BrandLogo}
            style={{ backgroundColor: item.ImgBackgroundColor }}
          ></img>
          <div className="timeline">
            <span>{diff.months() > 0 ? moment(item.Enddate).format('D.M.Y') : "son diff gün".replace("diff",diff.days()) }</span>
          </div>
        </div>
        <div className="text">
          <h3>{item.Title}</h3>
          <a>
            <b>{"Hemen Katıl"}</b>
          </a>
        </div>
      </div>
      <Background />
    
    </a>
  );
}

export default Card;
