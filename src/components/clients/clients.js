import React from "react";
import Slider from "react-slick";
import "./clients.scss";
import "../slick/slick.scss";
import lucoil from "./img/luk_oil_logo.svg";
import rosneft from "./img/rosneft_logo.svg";
import nornikel from "./img/nornikel_logo.svg";

function Clients() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="clients">
      <h2 className="clients__title">Наши постоянные клиенты</h2>
      <Slider {...settings}>
        <div>
          <div className="clients__img-wrapper">
            <img
              className="clients__img"
              alt="Партнёр- Лукойл"
              src={lucoil}
              width="200"
            />
          </div>
        </div>
        <div>
          <div className="clients__img-wrapper">
            <img
              className="clients__img"
              alt="Партнёр- Роснефть"
              src={rosneft}
              width="200"
            />
          </div>
        </div>
        <div>
          <div className="clients__img-wrapper">
            <img
              className="clients__img"
              alt="Партнёр- Норникель"
              src={nornikel}
              width="200"
            />
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Clients;
