import Event from "../../../models/event.js";

export const get_all_event_names = async (req, res) => {
  try {
    let Response = await Event.find().select("Name");
    if (Response) {
      res.json({ status: 200, details: Response });
    }
  } catch (err) {
    res.json({ status: 404, msg: err.message });
  }
};

export const get_event_stats = async (req, res) => {
  let event_id = req.query.eventId;
  try {
    let Response = await Event.findById(event_id).select(
      "Name, RegistrationFee, ExpectedAttendees, Type"
    );
    if (Response) {
      res.json({ status: 200, details: Response });
    } else {
      res.json({ status: 404, details: "Not Found" });
    }
  } catch (err) {
    res.json({ status: 500, msg: err.message });
  }
};

