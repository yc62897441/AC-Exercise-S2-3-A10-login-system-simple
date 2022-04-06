// 載入套件
const Account = require("../account")
const db = require("../../config/mongoose")

// 種子資料
const seeds = require("./accounts.json")
const users = seeds.results

// 建立資料於資料庫
db.once("open", () => {
  users.forEach(user => {
    Account.create({
      firstName: user.firstName,
      email: user.email,
      password: user.password,
    })
  })
  console.log('Data load in db done.')
})