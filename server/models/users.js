const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userschema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    //giving connection to event model.Remember ,user can create any no. of events
    createdEvents: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Event'
        }
      ]
})

module.exports=mongoose.model('User',userschema)