import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    font-family: "Advent Pro", sans-serif;
    font-size: 3rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <p>Tyler Davis</p>
    </StyledHeader>
  );
};

export default Header;
