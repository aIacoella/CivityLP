const moongose = require("mongoose");

const UsersSchema = moongose.Schema({
  email: {
    type: String
  },
  type: {
    type: String,
    default: "UN"
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = moongose.model("Users", UsersSchema);
