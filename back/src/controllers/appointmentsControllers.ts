import { Request, Response } from "express"
import { cancelAppointment, createAppointmentServices, getAllAppointmentsServices, getAppointmentByIdServices } from "../services/turnsServices";
import Appointment from "../entities/Appointment";

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.

export const getAllAppointments = async (req: Request, res: Response) => {
    const appointments:Appointment[] = await getAllAppointmentsServices ();
    res.status(200).json (appointments);
};

// GET /appointment/:id => Obtener el detalle de un turno específico.

export const getAppointmentsById = async (req: Request, res: Response)=> {
    const { id } = req.params;
    try {
        const foundAppointment = await getAppointmentByIdServices(Number(id));
        res.status(200).json (foundAppointment);
    } catch (error:any) {
        res.status(400).json({ message: error.message})
    }
};

// POST /appointment/schedule => Agendar un nuevo turno.

export const schedule = async (req:Request , res: Response) => {
    try {
        const { date, time, userId } = req.body;
        const newAppointment: Appointment = await createAppointmentServices ({
            date, time, userId,
        });
        res.status(200).json (newAppointment);
    } catch (error: any) {
        res.status(400).json({ message: error.message})
    }
};

// PUT /appointment/cancel/:id => Cambiar el estatus de un turno a “cancelled”.

export const cancel = async (req:Request , res: Response) => {
    const { id } = req.params;
    try {
        const foundAppointmentId = await cancelAppointment(Number(id));
        res.status(200).json ({mesage: 'Turno Cancelado'});
    } catch (error:any) {
        res.status(400).json({ message: error.message})
    }
};
