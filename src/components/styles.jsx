import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body{
  margin: 0;
  padding: 0;
  color: #fff;
  overflow-x: hidden;
  font-family: 'Advent Pro', sans-serif;
  &::-webkit-scrollbar {
    width: .4rem;
  }
   
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
  }
   
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    outline: 1px solid #000;
    border-radius: 2px;
  }
  }
`;
export const StyledNavbar = styled.nav`
  width: 85px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  & button {
    background: none;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 200;
    cursor: pointer;
    display: flex;
    width: 100%;
    padding: 1rem;
    font-family: 'Advent Pro', sans-serif;

    & i {
      font-size: 2rem;
      margin: 0 1rem;
    }
  }
`;
export const StyledHeader = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h1 {
      font-size: 5rem;
      margin: 0;
      font-weight: 300;
    }
    & p {
      font-size: 2rem;
      font-weight: 200;
      margin: 0.5rem;
    }
  }
`;

export const StyledAudioIcon = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 3rem;
  z-index: 10;
  & button {
    border: none;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const StyledIcons = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 10%;
  right: 55px;
  font-size: 1.3rem;
  z-index: 9;
  & a {
    color: #fff;
  }
`;

export const StyledScrollIcon = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 10;
  margin: 1rem;
  & button {
    background: none;
    border: none;
    color: #fff;
    font-size: 2.5rem;
    z-index: 10;
  }
`;

export const StyledBot = styled.section`
  position: fixed;
  bottom: 5%;
  right: 45px;
  z-index: 10;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  & :focus {
    outline: none;
  }
  & button {
    border: none;
    background: none;
    cursor: pointer;
    outline: none;
    font-size: 2rem;
    color: #fff;
  }
`;
