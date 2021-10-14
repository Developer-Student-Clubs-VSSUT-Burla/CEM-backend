import mongoose from "mongoose";
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    eventType: {
      type: String,
      enum: ["online", "offline"],
      required: true,
    },
    registrationFee: {
      type: Number,
      required: true,
    },
    expectedAttendees: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    createdOn: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Event = model("Event", eventSchema);
export default Event;
/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         eventDate:
 *           type: date
 *         eventType:
 *           type: string
 *           enum: ["online", "offline"]
 *         registrationFee:
 *           type: number
 *         expectedAttendees:
 *           type: number
 *         createdBy:
 *           type: Schema.Types.ObjectId
 *         createdOn:
 *           type: date
 */
