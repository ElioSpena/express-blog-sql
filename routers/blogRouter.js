import express from "express";
import blogController from "../controllers/blogController.js";
import checkParam from "../middlewares/checkParam.js";

const router = express.Router();

//INDEX
router.get("/", blogController.index);
//SHOW
router.get("/:id", checkParam, blogController.show);
//STORE
router.post("/", blogController.store);
//UPDATE
router.put("/:id", checkParam, blogController.update);
//MODIFY
router.patch("/:id", checkParam, blogController.modify);
//DESTROY
router.delete("/:id", checkParam, blogController.destroy);

export default router;
