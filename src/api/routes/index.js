import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import { specs, swaggerConfig } from "../../config/index.js";
import user from "./user.js";
import eventRoutes from "./events.js"
const router = Router();

const specDoc = swaggerJsdoc(swaggerConfig);

router.use(specs, serve);
router.get(specs, setup(specDoc, { explorer: true }));

router.use("/user", user);
router.use("/event", eventRoutes);

export default router;
