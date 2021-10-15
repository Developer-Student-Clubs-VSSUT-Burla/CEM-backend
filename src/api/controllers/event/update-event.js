import Event from "../../../models/event.js";
import User from "../../../models/user.js";
import { errorHelper, getText } from "../../../utils/index.js";

export const adding_participant = async (req, res) => {
  let event_id = req.query.eventId;
  let user_id = req.query.userId;
  try {
    // *********** Updating the event details in the User Model *********************
    let userEventsModify = await User.findByIdAndUpdate(user_id, {
      $push: {
        Event: event_id,
      },
    });
    console.log(userEventsModify);
    if (userEventsModify) {
      // *********** Updating the no of attending members in the Event Model *********************
      let eventModify = await Event.findByIdAndUpdate(event_id, {
        $inc: { ExpectedAttendees: 1 },
      });
      console.log(eventModify);
      if (eventModify) {
        res.status(200).json({
          resultMessage: getText("00089"),
          resultCode: "00089",
        });
      } else {
        res.status(404).json({
          resultMessage: getText("00042"),
          resultCode: "00042",
        });
      }
    } else {
      res.status(404).json({
        resultMessage: getText("00042"),
        resultCode: "00042",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(errorHelper("00090", req, err.message));
  }
};

export const removing_participant = async (req, res) => {
  let event_id = req.query.eventId;
  let user_id = req.query.userId;

  try {
    // *********** Updating the event details in the User Model *********************
    let userEventsModify = await User.findByIdAndUpdate(user_id, {
      $pull: { Event: event_id },
    });
    console.log(userEventsModify);
    if (userEventsModify) {
      // *********** Updating the no of attending members in the Event Model *********************
      let eventModify = await Event.findByIdAndUpdate(event_id, {
        $dec: { ExpectedAttendees: 1 },
      });
      console.log(eventModify);
      if (eventModify) {
        res.status(200).json({
          resultMessage: getText("00089"),
          resultCode: "00089",
        });
      } else {
        res.status(404).json({
          resultMessage: getText("00042"),
          resultCode: "00042",
        });
      }
    } else {
      res.status(404).json({
        resultMessage: getText("00042"),
        resultCode: "00042",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(errorHelper("00090", req, err.message));
  }
};
