const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    username: { type: String, unique: true, required: true },  // new field
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: false },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
