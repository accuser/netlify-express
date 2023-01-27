import { request } from "undici";

const getPosts = async () => {
  const { body } = await request("https://jsonplaceholder.typicode.com/posts");

  return body.json() as unknown as Promise<Post[]>;
};

export default getPosts;
