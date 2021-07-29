import styled from "styled-components";
import "./Viewers.css";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { red } from "@material-ui/core/colors";

function Viewers() {
  const viewers = [
    { imgURL: "/images/viewers/29.jpg", videoURL: "/videos/29.mp4" },
    { imgURL: "/images/viewers/avatar.jpg", videoURL: "/videos/avatar.mp4" },
    {
      imgURL: "/images/viewers/love_victor.jpg",
      videoURL: "/videos/love_victor.mp4",
    },
    { imgURL: "/images/viewers/onward.png", videoURL: "/videos/onward.mp4" },
    {
      imgURL: "/images/viewers/right_stuff.jpg",
      videoURL: "/videos/right_stuff.mp4",
    },
  ];

  return (
    <Container className="viewers__container">
      {viewers.map((item) => (
        <HoverVideoPlayer
          className="viewers__video"
          videoSrc={item.videoURL}
          muted={false}
          style={{
            width: "100%",
            height: "100%",
          }}
          pausedOverlay={
            <img
              src={item.imgURL}
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
          loadingOverlay={<div className="loading-spinner-overlay" />}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div``;

export default Viewers;
