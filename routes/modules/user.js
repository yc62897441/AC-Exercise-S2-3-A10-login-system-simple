// 引用 Express 與 Express 路由器
const express = require("express")
const router = express.Router()

// 引用 Account model
const Account = require("../../models/account")

// 定義首頁路由
router.get("/:id", (req, res) => {
  // 取得 account 該筆資料之資料庫 _id
  const id = req.params.id

  // 透過 _id 從資料庫找出該筆 account 之資訊
  Account.findById(id)
    .lean()
    .then(account => {
      const firstName = account.firstName
      res.render("user", { firstName: firstName })
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router


