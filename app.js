// 載入套件
const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")

// 載入自定義套件
const Account = require("./models/account")
require("./config/mongoose")
const mongoose = require("mongoose")
const routes = require("./routes/index")

// 伺服器參數設定
const app = express()
const port = 3000

// 設定view engine
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// 使用body-parser
// 可改用 app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

// 使用總路由器
app.use(routes)

// 啟動與監聽伺服器
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})