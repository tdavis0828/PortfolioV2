import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  error: false,
  isActive: false,
  currentJoke: '',
};

// Inital request to get the joke, this is what needs to be received in the ActionProvider.js || Chatbot.jsx is dispatching it currently to test that everything is set up properly
export const getJoke = createAsyncThunk('jokes/getJoke', async () => {
  const res = await fetch(
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist&type=single'
  );
  const { joke } = await res.json();
  console.log(joke);
  return joke;
});

export const chatbotSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    setCurrentJoke(state, { payload }) {
      state.currentJoke = payload;
    },
    setIsActive(state, { payload }) {
      state.isActive = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getJoke.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.currentJoke = '';
      })
      .addCase(getJoke.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = false;
        state.currentJoke = payload;
      })
      .addCase(getJoke.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.currentJoke = '';
      });
  },
});

export const { setCurrentJoke, setIsActive } = chatbotSlice.actions;

export default chatbotSlice.reducer;
