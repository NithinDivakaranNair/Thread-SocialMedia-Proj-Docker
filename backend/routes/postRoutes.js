import express from "express"
const  router=express.Router();
import { createPost,
          getPost,
          deletePost,
          likeUnlikePost,
          replyToPost,
          getFeedPosts,
          getUserPosts } from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";

router.get("/feed",protectRoute, getFeedPosts);
router.post('/create',protectRoute, createPost)
router.get("/:id",getPost)
router.get("/user/:username",getUserPosts);
router.delete("/:id",protectRoute,deletePost)
router.put("/like/:id",protectRoute,likeUnlikePost)
router.put("/reply/:id",protectRoute,replyToPost)

export default router;