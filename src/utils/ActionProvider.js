import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage();
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleGreeting() {
    const message = createChatBotMessage('Hello. Nice to meet you!');
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleQuestion() {
    const message = createChatBotMessage(
      'I can do all sorts of things! I can get you to a certain part of the page, or I can give you more information about Tyler. I can even tell jokes'
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  // This action is fired based off of an event declared in the message parser
  handleJoke() {
    // Here is where the joke needs be brought in and plugged in dynamically
    const message = createChatBotMessage('Jokes will be made');
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleDrinkRecipe() {
    const message = createChatBotMessage('Cocktail Recipe will be given');
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleDefault() {
    const message = createChatBotMessage(
      'Sorry. I am still learning and I dont quite understand your question. Can you try something else?'
    );
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
