import Event from "../../../models/event.js";
import { errorHelper, getText } from "../../../utils/index.js";

export const get_all_event_names = async (req, res) => {
  try {
    let Response = await Event.find().select("Name");
    //console.log(Response);
    if (Response) {
      res.status(200).json({
        resultMessage: getText("00089"),
        resultCode: "00089",
      });
    }
  } catch (err) {
    //console.log(err);
    res.status(500).json(errorHelper("00090", req, err.message));
  }
};

export const get_event_stats = async (req, res) => {
  let event_id = req.query.eventId;
  try {
    let Response = await Event.findById(event_id).select(
      "Name, RegistrationFee, ExpectedAttendees, Type"
    );
    // console.log(Response);
    if (Response) {
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
  } catch (err) {
    //console.log(err);
    res.status(500).json(errorHelper("00090", req, err.message));
  }
};

// Sample objectId for testing : 5349b4ddd2781d08c09890f3
