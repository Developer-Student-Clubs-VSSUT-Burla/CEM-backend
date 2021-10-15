import express from "express";
import { port } from "./config/index.js";
import loader from "./loaders/index.js";
import router from "./api/routes/events.js"
const app = express();

loader(app);
app.use("/", router);
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});

export default app;
