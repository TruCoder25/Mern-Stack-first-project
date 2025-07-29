const Joi = require('joi');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Result } = require('postcss');

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
   email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
})

const generateToken = (userId) => {
  return jwt.sign({ userId }, "DEFAULT_SECRET_KEY", {
    expiresIn: 3 * 24 * 60 * 60
  });
};

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const { error } = registerSchema.validate({ name, email, password });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }

  try {
    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      return res.status(400).json({
        success: false,
        message: 'User Email Already Exists. Please try with a new Email.'
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newlyCreatedUser = await User.create({
      name,
      email,
      password: hashPassword
    });

    const token = generateToken(newlyCreatedUser._id);

    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false
    });

    res.status(201).json({
      success: true,
      message: 'User registration successful',
      userData: {
        name: newlyCreatedUser.name,
        email: newlyCreatedUser.email,
        _id : newlyCreatedUser._id
      }
    });

    next()

  } catch (error) {
    console.log("Register Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later."
    });
  }
};

const loginUser = async(req,res,next)=>{
        const{email,password} = req.body;

        const { error } = loginSchema.validate({ email, password });

        if (error) {
          return res.status(400).json({
            success: false,
            message: error.details[0].message
          });
        }

        try{
          const getUser = await User.findOne({email});

        if(!getUser)
        {
          return res.status(400).json({
            message:'Incorrect email',
            success : false,
          })
        }

        const checkAuth = await bcrypt.compare(password,getUser.password);

        if(!checkAuth)
        {
        return res.status(400).json({
            message:'Incorrect password',
            success : false,
          })
        }

        const token = generateToken(getUser?._id);

        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false
          });

        res.status(201).json({
          success : true,
          message : 'User logged in'
        })

        next();
        }
 
    catch (error) {
    console.log("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later."
    });
  }
}


module.exports = { registerUser , loginUser};
