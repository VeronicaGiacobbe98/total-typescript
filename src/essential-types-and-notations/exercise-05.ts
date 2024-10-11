const concatName = (first: string, last = "Pocock") => {
  return `${first} ${last}`;
};

console.log(concatName("nome", "cognome"));
