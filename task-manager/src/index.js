const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const bcrypt = require("bcryptjs")

const myFunction = async () => {
  const password = "Red12345!"

  // 8 resembles the number of round we want to
  // the algorithm to iterate on the plaintext
  // 8 "strikes" balance between security and speed
  // recommended by the algorithm's creator
  const hashedPassword = await bcrypt.hash(password, 8)

  const isMatch = await bcrypt.compare("Red12345!", hashedPassword)
}

myFunction()

app.listen(port, () => {
  console.log("Server is up on port", port);
});
