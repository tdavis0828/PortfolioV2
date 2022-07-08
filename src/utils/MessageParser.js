class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // Greeting Message Handler
    switch (message.toLowerCase()) {
      case 'hello':
        this.actionProvider.handleGreeting();
        break;
      case 'hi':
        this.actionProvider.handleGreeting();
        break;
      case 'hey':
        this.actionProvider.handleGreeting();
        break;
      case 'sup':
        this.actionProvider.handleGreeting();
        break;

      default:
        break;
    }

    // Questions Handler
    switch (message.toLowerCase()) {
      case 'what can you do?':
        this.actionProvider.handleQuestion();
        break;
      default:
        break;
    }

    // Cocktail Recepie Handler
    switch (message.toLowerCase()) {
      case 'drink':
        this.actionProvider.handleDrinkRecipe();
        break;

      default:
        break;
    }

    // Joke Handler | Here is where the action for the joke will be dispatched
    switch (message.toLowerCase()) {
      case 'joke':
        this.actionProvider.handleJoke();
        break;
      case 'tell me a joke':
        this.actionProvider.handleJoke();
        break;
      case 'any jokes?':
        this.actionProvider.handleJoke();
        break;
      default:
        break;
    }

    // Error Boundary Message Handler
    switch (message) {
      case '':
        this.actionProvider.handleDefault();
        break;
      default:
        break;
    }
  }
}

export default MessageParser;
