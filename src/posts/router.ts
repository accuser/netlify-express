import { Router } from "express";
import { getPost, getPosts } from "./services";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const posts = await getPosts();

    res.json(posts);
  } catch (e) {
    console.error(e);

    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await getPost(+id);

    if (post) {
      res.json(post);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.error(e);

    res.sendStatus(500);
  }
});

export default router;
