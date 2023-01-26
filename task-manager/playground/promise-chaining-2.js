require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("63d02fd4fec1e6dffc4aa12d")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("63d02fd4fec1e6dffc4aa12d")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });