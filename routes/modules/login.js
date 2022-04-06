// 引用 Express 與 Express 路由器
const express = require("express")
const router = express.Router()

// 引用 Account model
const Account = require("../../models/account")

// 定義首頁路由
router.post("/", (req, res) => {
  // 取得使用者送出之登入 email 與密碼
  const loginEmail = req.body.loginEmail
  const loginPassword = req.body.loginPassword

  // 比對資料庫之 accounts 之 email 與密碼
  Account.find()
    .lean()
    .then(accounts => {
      // 找尋符合使用者送出之資訊之 account
      account = accounts.find(user => user.email === loginEmail)
      if (typeof account === "undefined") {
        // 帳號不存在
        const alert = "帳號不存在"
        res.render("index", { loginEmail: loginEmail, alert: alert })
      } else {
        if (account.password === loginPassword) {
          // email與密碼均符合，導向 account 之個人頁面
          res.redirect(`/user/${account._id}`)
        } else {
          // email正確，密碼錯誤
          const alert = "密碼錯誤"
          res.render("index", { loginEmail: loginEmail, alert: alert })
        }
      }
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router