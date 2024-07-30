const UserModel = require("../models/UserModel")
const bcryptjs = require('bcryptjs')

async function registerUser(request, response){
    const { name, email, password, profile_pic } = request.body
    console.log(`name:${name}, email:${email}, password:${password}, profile_pic:${profile_pic}`)
    
    //비밀번호를 암호화 해서 저장해야 법에 위반되지 않음
    const salt = await bcryptjs.genSalt(10)
    const hashpassword = await bcryptjs.hash(password, salt)
    console.log(`비밀번호가 성공적으로 암호화 되었습니다.${password}`)

    //이메일 중복체크 알고리즘
    const checkEmail = await UserModel.findOne({ email })
    if (checkEmail){
        return response.status(400).json({
            massage: "이미 사용중인 계정으로 로그인 할 수 없습니다.",
            error : true
        })
    }

    const payload = {
        name,
        email,
        password : hashpassword,
        profile_pic
    }
    const user = new UserModel(payload)
    const userSave = await user.save()

    return response.status(201).json({
        massage: "서버에 사용자 등록을 완료하였습니다."
    })
}

module.exports = registerUser