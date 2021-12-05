import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useLayoutEffect } from "react";
import Back from "../../svg/back.js";

function DetailPage() {
  const { id, name } = useParams();
  const [promotion, setPromotion] = useState(null);

  useLayoutEffect(() => {
    result();
  }, []);

  const result = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://testapi.dahadaha.com/api/promotions/" + id)
        .then((res) => {
          resolve(res);
          setPromotion(res.data[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return (
    promotion && (
      <div className="promotion">
        <div className="logo">
          <Back/>
          
          <img className="logo" src={promotion.ImgUrl}></img>
          <img
            className="brand-logo"
            src={promotion.BrandLogo}
            style={{ backgroundColor: promotion.ImgBackgroundColor }}
          ></img>
        </div>
        <div className="text">
          <h3>{promotion.Title}</h3>

          <div className="description"
            dangerouslySetInnerHTML={{ __html: promotion.Description }}
          ></div> 
          
          <div className="hemen">
            <b>{"Hemen Katıl"}</b>
          </div>
        </div>
      </div>
    )
  );
}

export default DetailPage;
