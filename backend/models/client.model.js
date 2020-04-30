const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  displayPic: { type: String },
});

module.exports = mongoose.model("Client", ClientSchema);
