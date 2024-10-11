function validateUsername(username: string | null): boolean {
  if (username === null) {
    return false;
  }

  return username.length > 5;
}
