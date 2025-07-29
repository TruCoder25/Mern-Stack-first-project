
const jwt = require('jsonwebtoken')
const user = require('../models/user')

const userAuthVerification = async(req,res)=>{
    const token = req.cookies.token;

    if(!token)
    {
        return res.status(401).json({
            success : false,
            message : 'Token is not available or invalid token'
        })
    }

    if(token)
    {
        try{
            const decoded = jwt.verify(token,"DEFAULT_SECRET_KEY")
            const userInfo = await user.findById(decoded.getId)

            if(userInfo)
                    return res.status(200).json({
                success:true,
               userInfo,
            })
            
        }
        catch(error)
        {
            return res.staus(401).json({
                success : false,
                message : 'User Not Authenticated'
            })
        }
    }
}

module.exports = {userAuthVerification}