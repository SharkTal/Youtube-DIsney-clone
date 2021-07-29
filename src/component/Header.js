import styled from "styled-components";
import "./Header.css";

import React from "react";
import { auth, provider } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useEffect } from "react";

function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth.signOut().then(() => {
        dispatch(setSignOutState())
        history.push('/')
      }).catch((error) => alert(error.message) );
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  return (
    <Nav className="header__nav">
      <Logo className="header__logo">
        <img
          src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
          alt=""
        />
      </Logo>

      {!userName ? (
        <Login className="header__login" onClick={handleAuth}>
          Login
        </Login>
      ) : (
        <>
          <NavMenu className="header__navMenu">
            <a href="/home">
              <img src="/images/home.svg" alt="HOME" />
            </a>
            <span>HOME</span>

            <a href="/search">
              <img src="/images/search.svg" alt="SEARCH" />
            </a>
            <span>SEARCH</span>

            <a href="/watchlist">
              <img src="/images/watchlist.svg" alt="WATCHLIST" />
            </a>
            <span>WATCHLIST</span>

            <a href="/originals">
              <img src="/images/originals.svg" alt="ORIGINALS" />
            </a>
            <span>ORIGINALS</span>

            <a href="/movies">
              <img src="/images/movies.svg" alt="MOVIES" />
            </a>
            <span>MOVIES</span>

            <a href="/series">
              <img src="/images/series.svg" alt="SERIES" />
            </a>
            <span>SERIES</span>
          </NavMenu>
          <SignOut className="header__signOut">
            <UserImg src={userPhoto} alt={userName} />
            <DropDown className="header__dropDown">
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav``;

const Logo = styled.a``;

const NavMenu = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a``;

const UserImg = styled.img`
  height: 100%;
  max-width: 70px;
`;

const DropDown = styled.div``;

const SignOut = styled.div`
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
