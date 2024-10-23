type User = {
  name: string;
  email: string;
};

export class SDK {
  loggedInUser?: User;

  constructor(loggedInUser?: User) {
    this.loggedInUser = loggedInUser;
  }

  assertIsLoggedIn(): asserts this is this & { loggedInUser: User } {
    if (!this.loggedInUser) {
      throw new Error("Not logged in");
    }
  }

  createPost(title: string, body: string) {
    this.assertIsLoggedIn();

    console.log(`${this.loggedInUser.name} is creating a post.`);
  }
}
