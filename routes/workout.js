const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutModel')
const mongoose= require('mongoose')
/*

//get all workouts
router.get('/', (req,res)=>{
    res.json({mssg:'get all workouts'})
    
})
router.get('/', async (req,res)=>{
    const workouts= await Workout.find({}).sort({createdAt:-1}) //ال كرييتد ات --> عشان يرتبلي اياهم من الاحدث الى الاقدم يعني تنازلي
    res.status(200).json(workouts)
})

router.get('/:id', (req,res)=>{
    res.json({mssg:'get single workout'})

})
router.get('/:id',async (req,res)=>{
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }
    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }
    res.status(200).json(workout)
})

router.post('/', (req,res)=>{
    res.json({mssg:'add new workout'})

})

router.post('/', async(req, res)=>{
    const {title,load,reps}= req.body //ادخللي عالبودي تبعت حزمة الداتا و اعمللي ديستركتشر لهدول ال3 متغيرات
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id', (req,res)=>{
    res.json({mssg:'delete workout'})

})

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }
    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(400).json({ error: 'No such workout' })
    }
    res.status(200).json(workout)
}

router.patch('/:id', (req,res)=>{
    res.json({mssg:'update workout'})

}) 
*/
// we moved the functions to another file for security and efficiency
    const {
        getWorkouts,
        getWorkout,
        createWorkout,
        deleteWorkout,
        updateWorkout
    } = require('../controllers/workoutController')
  
    // GET all workouts
    router.get('/', getWorkouts)
    // GET a single workout
    router.get('/:id', getWorkout)
    // POST a new workout
    router.post('/', createWorkout)
    // DELETE a workout
    router.delete('/:id', deleteWorkout)
    // UPDATE a workout
    router.patch('/:id', updateWorkout)
    
module.exports = router