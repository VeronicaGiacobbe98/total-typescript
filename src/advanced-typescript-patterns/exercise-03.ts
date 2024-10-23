type Brand<T, U> = T & { __brand: U };

type PostId = Brand<string, "PostId">;
type UserId = Brand<string, "UserId">;

interface User {
  id: UserId;
  name: string;
}

interface Post {
  id: PostId;
  title: string;
}

interface Database {
  [key: UserId]: User;
  [key: PostId]: Post;
}

const db: Database = {};

const postId = "post_1" as PostId;
const userId = "user_1" as UserId;

db[postId] = {
  id: postId,
  title: "Hello world",
};

db[userId] = {
  id: userId,
  name: "Miles",
};

const post = db[postId];
const user = db[userId];
