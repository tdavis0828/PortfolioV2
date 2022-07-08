import { useEffect } from 'react';
import { StyledBot } from './styles';
import { Chatbot } from 'react-chatbot-kit';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getJoke } from '../store/chatbotSlice';
import MessageParser from '../utils/MessageParser';
import ActionProvider from '../utils/ActionProvider';
import config from '../utils/config';
import 'react-chatbot-kit/build/main.css';
import { setIsActive } from '../store/chatbotSlice';

const ChatBot = () => {
  const dispatch = useDispatch();
  const { isActive } = useSelector((state) => state.chatbot, shallowEqual);

  useEffect(() => {
    dispatch(getJoke());
  }, [dispatch]);

  return (
    <StyledBot>
      {isActive === false ? (
        <button
          onClick={() =>
            isActive === false
              ? dispatch(setIsActive(true))
              : dispatch(setIsActive(false))
          }
        >
          <i className="fa-solid fa-comment-dots"></i>
        </button>
      ) : (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
    </StyledBot>
  );
};

export default ChatBot;
