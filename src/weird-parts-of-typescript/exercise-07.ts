type Event = "click" | "hover" | "scroll";

type CallbackType = (
  event: Event,
  x?: number,
  y?: number,
  screenId?: number
) => void;

const listenToEvent = (callback: CallbackType) => {
  const event: Event = "click";
  const x = 10;
  const y = 20;
  const screenId = 1;

  callback(event, x, y, screenId);
};

listenToEvent(() => {});
