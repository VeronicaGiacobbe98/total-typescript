const func = () => {
  const randomPercentage = getRandomPercentage();
  console.log(randomPercentage);
};

console.log(func);

function getRandomPercentage() {
  return `${(Math.random() * 100).toFixed(2)}%`;
}
