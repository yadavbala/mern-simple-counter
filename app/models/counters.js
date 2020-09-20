const mongoose=require('mongoose')

const Schema=mongoose.Schema


const counterSchema=new Schema({
    value:{
        type:Number,
        default:0,
        required:true
    }
})

const Counter=mongoose.model('Count',counterSchema)

module.exports=Counter