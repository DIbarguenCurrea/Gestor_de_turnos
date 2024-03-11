import { Router } from "express";
import { cancel, getAllAppointments, getAppointmentsById, schedule, } from "../controllers/appointmentsControllers";
const appointmentsRouter = Router();

appointmentsRouter.get('/', getAllAppointments);
appointmentsRouter.get('/:id', getAppointmentsById);
appointmentsRouter.post('/schedule', schedule);
appointmentsRouter.put('/cancel/:id', cancel);

export default appointmentsRouter;