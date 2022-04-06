// 載入套件
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const accountSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// 匯出Schema
module.exports = mongoose.model("Account", accountSchema)