import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'VIM';

const config = {
  initialMessages: [
    createChatBotMessage(
      `Welcome to Tyler's portfolio, my name is ${botName} and I am your Virtual Instant Messanger and I'll be your go to if you have any questions while you are here. Until then, I'll be here!`
    ),
  ],
  customComponents: {
    header: () => (
      <div
        style={{
          background: '#73777B',
          height: '30px',
          display: 'flex',
          justifyContent: 'spaceBetween',
          alignItems: 'center',
          padding: '.5rem',
        }}
      >
        <p>Chatting with {botName}</p>
      </div>
    ),
  },
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#73777B',
    },
    userMessageBox: {
      backgroundColor: '#000',
    },
    chatButton: {
      backgroundColor: '#73777B',
    },
  },
};

export default config;
