const { Schema, model } = mongoose;

const eventSchema = new Schema({
    Name:{
        type: String,
        required: true,
    },
    Date:{
        type: Date,
        required: true,

    },
    Type:{
        type:String,
        enum:["online","offline"],
        required:true,
    },
    RegistrationFee:{
        type:Number,
        required:true

    },
    ExpectedAttendees:{
        type:Number,
        required:true
    },

    CreatedBy:{
      type:Schema.Types.ObjectId,
      ref:"User"
    },

    CreatedOn:{
        type:Date,
        required:true,
        
    }

},
{
    timestamps: true,
}
);
 const Event = model("Event",eventSchema);
 export default Event;