const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. Check back soon!");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port", port);
});

// const main = async () => {
//   // const task = await Task.findById("63d7f48b138bf9023ec2f9e5");
//   // await task.populate("owner");
//   // console.log(task.owner);
//
//   const user = await User.findById("63d7f475138bf9023ec2f9df");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };
//
// main();
