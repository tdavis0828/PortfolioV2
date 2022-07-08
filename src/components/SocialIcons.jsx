import { StyledIcons } from './styles';

const SocialIcons = () => {
  return (
    <StyledIcons>
      <a href="https://www.github.com" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github-alt"></i>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
        <i className="fa-solid fa-paper-plane"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </StyledIcons>
  );
};

export default SocialIcons;
