import { configureStore } from '@reduxjs/toolkit';
import chatbotSlice from './chatbotSlice';

export default configureStore({
  reducer: {
    chatbot: chatbotSlice,
  },
});
