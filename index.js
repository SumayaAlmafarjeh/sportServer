const express = require ('express')//عملت امبورت لل اكسبريس
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors');
const userRoutes = require('./routes/user')

const app = express() // عملت تطبيق اكبريس جديد

app.use(cors());

/*
app.get('/', (req, res )=>{ //api عملنا 
//   و بنوصلله من الرووت / و الكول باك فنكشن اول باراميتر بيشوف اذا بعتتله اشي الكلاينت 
// و التاني هو الريسبونس الراجع من السيرفر   
res.json({mssg:'welcome to the app '})
})
*/

// middleware
app.use(express.json()) // use --> هو وسيط بين الكلاينت و السيرفر 

// routes               //هون بحول من جيسون ل اوبجيكت
app.use('/api/workouts', workoutRoutes) //  هون اسم الميدل وير اللي بدي انشئه و اللي رح يصير رووت تبعنا , اسم الملف اللي فيه الراوتس
app.use('/api/user', userRoutes)
/*
app.listen(4000,()=>{ //جوا كول باك فنكشن عشان يتأكد اول اذا البورت شغال ولا لا و بعدين اذا اشتغل يفوت عالفنكشن و يرجع الريسبونس,  اول باراميتتر هو البورت و التاني هو الريسبونس
console.log('listening on port 4000')

}) 
بنحط بدالها الكونيكشن بالداتابيس
*/
async function connectDB(){
    try{                                //env --> enviroment variables
        await mongoose.connect(process.env.MONGO_URI)//حطينا نص الاتصال بفايل امن عشان ممنوع نحطه هيك بالكود 
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db listening for requests on port ', process.env.PORT)
        })
    }catch(error){
        console.log(error)
    }
}
connectDB()