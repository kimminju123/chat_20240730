const express = require('express')
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
// const checkpassword = require('../controller/checkpassword.js')
const router = express.Router()

//카카오톡 회원가입
router.post('/register',registerUser)

//카카오톡 로그인 & 회원 존재 확인
router.post('/email', checkEmail)

//카카오톡 로그인 & 비밀번호 존재 확인
// router.post('/email', checkpassword)

module.exports = router