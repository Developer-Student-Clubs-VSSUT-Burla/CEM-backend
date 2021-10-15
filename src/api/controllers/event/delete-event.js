import Event from "../../../models/event.js";

const delete_event = async (req, res) => {
  let event_id = req.query.eventId;
  try {
    let Response = await Event.findByIdAndDelete(event_id);
    if (Response) {
      res.json({ status: 200, msg: "Event Deleted", details: Response });
    }
  } catch (err) {
    res.json({ status: 404, msg: err.message });
  }
};

export default delete_event;
