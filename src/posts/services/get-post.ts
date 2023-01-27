import { request } from "undici";

const getPost = async (id: number) => {
  const { body } = await request(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return body.json() as unknown as Promise<Post>;
};

export default getPost;
