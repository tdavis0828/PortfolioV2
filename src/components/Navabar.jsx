import { StyledNavbar } from './styles';

const Navbar = () => {
  return (
    <StyledNavbar>
      <button>
        <i className="fa-solid fa-house-chimney"></i> Home
      </button>

      <button>
        <i className="fa-solid fa-user-ninja"></i> About
      </button>

      <button>
        <i className="fa-solid fa-code"></i> Projects
      </button>

      <button>
        <i className="fa-solid fa-address-book"></i> Contact
      </button>
    </StyledNavbar>
  );
};

export default Navbar;
