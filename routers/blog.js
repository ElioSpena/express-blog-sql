import express from "express";
import blogController from "../controllers/blogController.js";

const router = express.Router();

//INDEX
router.get("/", blogController.index);
//SHOW
router.get("/:id", blogController.store);
//STORE
router.post("/", blogController.show);
//UPDATE
router.put("/:id", blogController.update);
//MODIFY
router.patch("/:id", blogController.modify);
//DESTROY
router.delete("/:id", blogController.destroy);

export default router;
