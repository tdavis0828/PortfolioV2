import { StyledAudioIcon } from './styles';
import { BarWave } from 'react-cssfx-loading';
import { useState } from 'react';
import audio_1 from '../audio/audio_1.mp3';
import audio_2 from '../audio/audio_2.mp3';
import audio_3 from '../audio/audio_3.mp3';
import audio_4 from '../audio/audio_4.mp3';
import audio_5 from '../audio/audio_5.mp3';

const AudioIcon = () => {
  const randomNum = () => {
    return Math.floor(Math.random() * songs.length - 1);
  };
  const songs = [audio_1, audio_2, audio_3, audio_4, audio_5];
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(songs[randomNum()]));
  const audioController = () => {
    isPlaying === true ? audio.play() : audio.pause();
  };

  return (
    <StyledAudioIcon>
      <button
        onLoad={audioController()}
        onClick={() =>
          isPlaying === true ? setIsPlaying(false) : setIsPlaying(true)
        }
      >
        <BarWave
          color="#fff"
          width="30px"
          height="20px"
          duration={isPlaying === true ? '2s' : '0s'}
        />
      </button>
    </StyledAudioIcon>
  );
};

export default AudioIcon;
