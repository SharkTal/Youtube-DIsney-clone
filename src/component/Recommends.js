import styled from "styled-components";
import "./Recommends.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

function Recommends({ sector_title }) {
    const userName = useSelector(selectUserName);
    const movies = useSelector(selectRecommend);
  console.log("FROM RECOMMEND PAGE>>", movies, userName);


  return (
    <Container className="recommends__container">
      <h4>{sector_title}</h4>
      <Content className="recommends__content">
       {
           movies && movies.map((movie, key) => (
               <Wrap key={key}>
                   {movie.id}
               </Wrap>
           ))
       }
      </Content>
    </Container>
  );
}

const Container = styled.div``;
const Content = styled.div``;
const Wrap = styled.div``;

export default Recommends;
