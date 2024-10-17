interface DEBUGState {
  id: string;
}

interface Window {
  DEBUG: {
    getState: () => DEBUGState;
  };
}
