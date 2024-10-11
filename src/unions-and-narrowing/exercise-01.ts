function getUsername(username: string | null) {
  if (username !== null) {
    return `User: ${username}`;
  } else {
    return "Guest";
  }
}

const result = getUsername("Alice");
console.log(result);

const result2 = getUsername(null);
console.log(result2);
