import express from "express";
import blogRouter from "./routers/blog.js";

const app = express();
const port = 3000;

app.use("/posts", blogRouter);

app.use(express.json());

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
