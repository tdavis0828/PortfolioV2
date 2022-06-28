import styled from "styled-components";

const StyledIcons = styled.div`
  height: 85px;
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  color: #fff;
  font-size: 1.3rem;
`;

const SocialIcons = () => {
  return (
    <StyledIcons>
      <i className="fa-brands fa-github-alt"></i>
      <i className="fa-brands fa-linkedin-in"></i>
      <i className="fa-solid fa-paper-plane"></i>
      <i className="fa-brands fa-instagram"></i>
    </StyledIcons>
  );
};

export default SocialIcons;
