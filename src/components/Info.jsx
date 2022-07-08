import styled from 'styled-components';
import reactLogo from '../imgs/atom.png';
import bootstrapLogo from '../imgs/bootstrap.png';
import cssLogo from '../imgs/css-3.png';
import htmlLogo from '../imgs/html-5.png';
import jsLogo from '../imgs/js.png';
import sassLogo from '../imgs/sass.png';

const StyledInfo = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  & img {
    width: 75px;
    height: 75px;
    margin: 5rem;
  }
`;
const Info = () => {
  return (
    <StyledInfo>
      <div>
        <img src={reactLogo} alt="React Logo" />
        <img src={bootstrapLogo} alt="Bootstrap Logo" />
        <img src={cssLogo} alt="CSS Logo" />
        <img src={htmlLogo} alt="HTML-5 Logo" />
        <img src={jsLogo} alt="Javascript Logo" />
        <img src={sassLogo} alt="SASS Logo" />
      </div>
    </StyledInfo>
  );
};

export default Info;
