import styled from "styled-components";

const StyledInfo = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Info = () => {
  return (
    <StyledInfo>
      <p>Testing info page</p>
    </StyledInfo>
  );
};

export default Info;
