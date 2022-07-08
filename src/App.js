import './index.css';
import { GlobalStyles } from './components/styles';
import ParticlesBackground from './components/Particles';
import Navbar from './components/Navabar';
import Header from './components/Header';
import Info from './components/Info';
import SocialIcons from './components/SocialIcons';
import AudioIcon from './components/AudioIcon';
import ScrollIcon from './components/ScrollIcon';
import ChatBot from './components/ChatBot';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ParticlesBackground />
      <ChatBot />
      <AudioIcon />
      <SocialIcons />
      <ScrollIcon />
      <Navbar />
      <Header />
      <Info />
    </>
  );
};

export default App;
