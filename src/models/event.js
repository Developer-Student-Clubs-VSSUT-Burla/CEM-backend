import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Date: {
      type: Date,
      required: true,
    },
    Type: {
      type: String,
      enum: ["online", "offline"],
      required: true,
    },
    RegistrationFee: {
      type: Number,
      required: true,
    },
    ExpectedAttendees: {
      type: Number,
      required: true,
    },

    CreatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    CreatedOn: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Event = mongoose.model("Event", eventSchema);
export default Event;
