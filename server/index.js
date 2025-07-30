
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user-routes')

require("./database")

const app = express(); 

app.use(
    cors({
        origin : ['http://localhost:5173'],
        methods : ['GET','POST','PUT','DELETE'],
        credentials:true
    })
)

app.use(cookieParser());
app.use(express.json())

app.use('/api/user',userRouter)

// app.use('/api/test',(req,res)=>{
//     res.status(200).json({message:"hello express"})
// })

// app.get('/api/user/auth', (req, res) => {
//   res.json({ success: true, userInfo: { email: 'pra12345@gmail.com' } });
// });

app.listen(8000,()=>console.log("App is running at port /8000"))
