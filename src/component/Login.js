import React from "react";
import styled from "styled-components";
import "./Login.css";
function Login(props) {
  return (
    <Container className="container">
      <Content className="content">
        <CTA className="cta">
          <CTALogoOne
            className="cta__logoOne"
            src="https://firestickapps.org/wp-content/uploads/2019/11/disney-plus-app-for-firestick.jpg"
            alt=""
          />
           <Description className="description">The greatest stories, all in one place.</Description>
          <SignUp className="signUp">GET ALL THERE</SignUp>
         
        <CTALogoTwo className="cta__logoTwo" src="https://cannonball-cdn.bamgrid.com/assets/originals/6Brand-1.png" alt="" />
        </CTA>
        <BgImage className="bgImage" />
      </Content>
    </Container>
  );
}

const Container = styled.section``;

const Content = styled.div``;

const BgImage = styled.div``;

const CTA = styled.div``;

const CTALogoOne = styled.img``;

const SignUp = styled.a``;

const Description = styled.p``;

const CTALogoTwo = styled.img``;

export default Login;
