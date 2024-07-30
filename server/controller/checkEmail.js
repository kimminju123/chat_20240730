const UserModel = require("../models/UserModel")

async function checkEmail(request,response){
    try {
        const { email } = request.body

        console.log(`email:${email}`)
        const checkEmail = await UserModel.findOne({email})
        consoole.log(`checkEmail:${checkEmail}`)

        if(!checkEmail){
            return response.status(400).json({
                message : "없는 계정입니다.",
                error : true
            })
        }

        return response.status(200).json({
            message : "환영합니다. 비밀번호를 입력해주십시오.",
            success : true,
            data : checkEmail
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = checkEmail