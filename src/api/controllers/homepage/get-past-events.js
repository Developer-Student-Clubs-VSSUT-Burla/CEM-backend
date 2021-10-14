import { Event } from "../../../models/index.js";
import { errorHelper, logger, getText } from "../../../utils/index.js";

export default async (req, res) => {
  const pastEvents = await Event.find({
    eventDate: {
      $lt: new Date(),
    },
  }).catch((err) => {
    return res.status(500).json(errorHelper("00088", req, err.message));
  });

  logger("00093", getText("00093"), "Info", req);
  return res.status(200).json({
    resultMessage: getText("00093"),
    resultCode: "00093",
    pastEvents,
  });
};

/** 
 * @swagger
 * /homepage/get-past-events:
 *    get:
 *      summary: Get past events  Info
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
 *          description: The past events information has gotten successfully.
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          resultMessage:
 *                              $ref: '#/components/schemas/ResultMessage'
 *                          resultCode:
 *                              $ref: '#/components/schemas/ResultCode'
 *                          past-events:
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

