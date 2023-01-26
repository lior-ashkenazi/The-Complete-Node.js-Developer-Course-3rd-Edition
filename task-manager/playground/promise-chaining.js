require("../src/db/mongoose");
const User = require("../src/models/user");

// we do not use the $set from before for updating -
// Mongoose library takes care to that from us
// User.findByIdAndUpdate("63d02fd4fec1e6dffc4aa12d", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("63d02fd4fec1e6dffc4aa12d", 2)
  .then((count ) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
