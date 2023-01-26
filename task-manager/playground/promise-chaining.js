require("../src/db/mongoose");
const User = require("../src/models/user");

// we do not use the $set from before for updating -
// Mongoose library takes care to that from us
User.findByIdAndUpdate("63d02fd4fec1e6dffc4aa12d", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
