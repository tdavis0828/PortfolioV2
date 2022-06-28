import styled from "styled-components";

const StyledNavbar = styled.nav`
  width: 85px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & button {
    background: none;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.75rem;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <button>
        <i className="fa-solid fa-house-chimney"></i>
      </button>

      <button>
        <i className="fa-solid fa-user-ninja"></i>
      </button>

      <button>
        <i className="fa-solid fa-code"></i>
      </button>

      <button>
        <i className="fa-solid fa-address-book"></i>
      </button>
    </StyledNavbar>
  );
};

export default Navbar;
