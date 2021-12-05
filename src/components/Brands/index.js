import "./style.css";
function Brands({ img, title , click, selected}) {
  return (
    <div onClick={click} className={'brand'} style={{justifyContent: !img && 'center', borderColor:selected ? "red" : "#eceeef" }}>
      {img && <img src={img}></img>}
      <span>{title}</span>
    </div>
  );
}

export default Brands;
