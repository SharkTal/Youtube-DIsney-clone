import styled from "styled-components";
import "./Recommends.css";
import { Link } from "react-router-dom";

import React from "react";

function Originals({ sector_title }) {
  return (
    <Container className="recommends__container">
      <h4>{sector_title}</h4>
      <Content className="recommends__content">
        <Wrap className="recommends__wrap">
          <Link to="/">
            <img
              src="https://newsitics.com/wp-content/uploads/2021/04/Captain-Marvel-2.jpeg"
              alt=""
            />
          </Link>
        </Wrap>

        <Wrap className="recommends__wrap">
          <Link to="/">
            <img
              src="https://newsitics.com/wp-content/uploads/2021/04/Captain-Marvel-2.jpeg"
              alt=""
            />
          </Link>
        </Wrap>

        <Wrap className="recommends__wrap">
          <Link to="/">
            <img
              src="https://newsitics.com/wp-content/uploads/2021/04/Captain-Marvel-2.jpeg"
              alt=""
            />
          </Link>
        </Wrap>

        <Wrap className="recommends__wrap">
          <Link to="/">
            <img
              src="https://newsitics.com/wp-content/uploads/2021/04/Captain-Marvel-2.jpeg"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div``;
const Content = styled.div``;
const Wrap = styled.div``;

export default Originals;
