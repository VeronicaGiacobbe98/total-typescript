declare global {
  interface Window {
    makeGreeting: () => string;
  }
}

window.makeGreeting = () => "Hello, world!";
