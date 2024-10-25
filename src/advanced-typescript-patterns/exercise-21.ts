export const getAnimatingState = (): string => {
  const randomValue = Math.random();

  if (randomValue < 0.33) {
    return "before-animation";
  }

  if (randomValue < 0.66) {
    return "animating";
  }

  return "after-animation";
};

const state = getAnimatingState();
console.log(state);
