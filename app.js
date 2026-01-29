import express from "express";
import blogRouter from "./routers/blogRouter.js";
import routeNotFound from "./middlewares/routeNotFound.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("public"));

app.use("/posts", blogRouter);

app.use(routeNotFound);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
