import React, { useState, useLayoutEffect, useRef } from "react";

import logo from "../../assets/dahadaha.jpg";
import "./style.css";
import axios from "axios";
import Brand from "../../components/Brands";
import Card from "../../components/Card";
import BottomMenu from "../../components/BottomMenu";
function Main() {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [brands, setBrands] = useState([{ title: "Tümü", selected: true }]);
  const indicator = useRef(null);
  const [selectIndicator, setSelectIndicator] = useState(0);

  useLayoutEffect(() => {
    result();
  }, []);

  const result = async () => {
    return new Promise((resolve, reject) => {
      let tempBrands = brands;
      axios
        .get("https://testapi.dahadaha.com/api/promotions")
        .then((res) => {
          setCards(res.data);
          setAllCards(res.data);
          res.data.forEach((element) => {
            //brandTags
            element.BrandTags.forEach((tags) => {
              if (!tempBrands.find((x) => x.title === tags.BrandName)) {
                tempBrands = tempBrands.concat([
                  {
                    title: tags.BrandName,
                    img: tags.BrandLogo,
                    selected: false,
                  },
                ]);
              }
            });
          });
          setBrands(tempBrands);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  const filter = (item) => {
    if (item.title == "Tümü") {
      setCards(allCards);
    } else {
      setCards(
        allCards.filter((x) => {
          return x.BrandTags.find((y) => y.BrandName == item.title);
        })
      );
    }
    setBrands(
      brands.map((x) => {
        return {
          ...x,
          selected: x.title === item.title ? true : false,
        };
      })
    );
  };
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" width="81" height="40"></img>
        <div className="headerRight">
          <button className="loginButton">
            <b>Giriş Yap</b>
          </button>
          <button className="profileButton">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7622 4.12731C11.7622 1.75698 10.0772 0 7.99894 0C5.92101 0 4.23744 1.75698 4.23744 4.12731C4.23744 6.4979 5.92101 8.42105 7.99894 8.42105C10.0771 8.42105 11.7622 6.4979 11.7622 4.12731ZM15.9545 14.693L15.574 12.9737C15.1025 10.8431 13.1083 9.41629 10.9557 9.66927C9.97523 9.78449 8.98994 9.8421 7.9998 9.8421C7.00965 9.8421 6.02436 9.78449 5.04392 9.66927C2.89129 9.41629 0.897107 10.8431 0.42558 12.9737L0.0450643 14.693C0.0151119 14.8284 0 14.9666 0 15.1053C0 16.1517 0.842232 17 1.88118 17H14.1184C14.2561 17 14.3933 16.9848 14.5277 16.9546C15.5418 16.7269 16.1806 15.7144 15.9545 14.693Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="slider">
        {brands.map((item) => {
          return (
            <Brand
              click={() => {
                filter(item);
              }}
              title={item.title}
              img={item.img}
              selected={item.selected}
            />
          );
        })}
      </div>
      <div className="cards">
        <div className="container">
          <div className="card-slider">
            <div className="wrapper" ref={indicator}>
              {cards.map((item) => {
                return <Card item={item} />;
              })}
            </div>
          </div>
          <div className="indicator">
            {cards.map((item, index) => {
              return (
                <div
                  className={selectIndicator == index ? 'ind active' :"ind"}
                  
                  onClick={() => {
                    console.log("click mi", indicator);
                    setSelectIndicator(index);
                    indicator.current.scrollTo(
                      (indicator.current.scrollWidth / cards.length) * index,
                      0
                    );
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <BottomMenu></BottomMenu>
      </div>
    </div>
  );
}

export default Main;
