import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ImgSlider.css";
import React from "react";


function ImgSlider(props) {
  const imgURLs = [
    "/images/Mulan_2020.jpg",
    "/images/family_guy.jpg",
    "/images/Avengers_Endgame.jpg",
    "/images/star_wars.jpg",
  ];

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "60px",
  };

  return (
    <Carousel className="imgSlider__carousel" {...settings}>
      {imgURLs.map((urls) => (
        <Wrap className="imgSlider__wrap">
          <a className="imgSlider_a">
            <img src={urls} alt="" />
          </a>
        </Wrap>
      ))}
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
`;

const Wrap = styled.div``;

export default ImgSlider;
