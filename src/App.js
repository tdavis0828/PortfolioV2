import "./index.css";
import { createGlobalStyle } from "styled-components";
import ParticlesBackground from "./components/Particles";
import Navbar from "./components/Navabar";
import Header from "./components/Header";
import Info from "./components/Info";
import SocialIcons from "./components/SocialIcons";

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
  padding: 0;
  color: #fff;
  &::-webkit-scrollbar {
    width: .5rem;
  }
   
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
   
  &::-webkit-scrollbar-thumb {
    background-color: #465881;
    outline: 1px solid slategrey;
    border-radius: 15px;
  }
  }
`;
const App = () => {
  return (
    <>
      <GlobalStyles />
      <ParticlesBackground />
      <Navbar />
      <SocialIcons />
      <Header />
      <Info />
    </>
  );
};

export default App;
