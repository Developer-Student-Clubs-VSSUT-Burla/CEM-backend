import Event from "../../../models/event.js";
import User from "../../../models/user.js";

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
        res.json({ status: 200, details: eventModify });
      } else {
        res.json({ status: 404, details: "Not Found" });
      }
    } else {
      res.json({ status: 404, details: "Not Found" });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: 500, msg: err.message });
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
        res.json({ status: 200, details: eventModify });
      } else {
        res.json({ status: 404, details: "Not Found" });
      }
    } else {
      res.json({ status: 404, details: "Not Found" });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: 500, msg: err.message });
  }
};
