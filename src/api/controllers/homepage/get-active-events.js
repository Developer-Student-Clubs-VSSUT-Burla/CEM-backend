import { Event } from "../../../models/index.js";
import { errorHelper, logger, getText } from "../../../utils/index.js";

export default async (req, res) => {
  const activeEvent = await Event.find({
    eventDate: {
      $gt: new Date(),
    },
  }).catch((err) => {
    return res.status(500).json(errorHelper("00094", req, err.message));
  });

  logger("00094", req.activeEvent._id, getText("00094"), "Info", req);
  return res.status(200).json({
    resultMessage: getText("00094"),
    resultCode: "00094",
    activeEvent,
  });
};

/** 
 * @swagger
 * /homepage/get-active-events:
 *    get:
 *      summary: Get active events  Info
 *      parameters:
 *        - in: header
 *          name: Authorization
 *          schema:
 *            type: string
 *          description: Put access token here
 *      tags:
 *        - Homepage
 *      responses:
 *        "200":
 *          description: The active events information has gotten successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          resultMessage:
 *                              $ref: '#/components/schemas/ResultMessage'
 *                          resultCode:
 *                              $ref: '#/components/schemas/ResultCode'
 *                          active-events:
 *                              $ref: '#/components/schemas/Event'
 *        "401":
 *          description: Invalid token.
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Result'
 *        "500":
 *          description: An internal server error occurred, please try again.
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Result'
 */
