// 引用 Express 與 Express 路由器
const express = require("express")
const router = express.Router()

// 引用路由模組
const home = require("./modules/home")
const user = require("./modules/user")
const login = require("./modules/login")

// 路由模組
router.use("/", home)
router.use("/user", user)
router.use("/login", login)

// 匯出路由模組
module.exports = router