import Event from "../../../models/event.js";
import { errorHelper,getText } from "../../../utils/index.js";

const delete_event = async (req, res) => {
  let event_id = req.query.eventId;
  try {
    let Response = await Event.findByIdAndDelete(event_id);
    if (Response) {
      res.status(200).json({
        resultMessage: getText("00092"),
        resultCode: "00092",
      });
    }
  } catch (err) {
    res.status(500).json(errorHelper("00090", req, err.message));
  }
};

export default delete_event;
