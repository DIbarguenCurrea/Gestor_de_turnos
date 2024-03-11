import { AppDataSource } from "../config/data-source";
import Appointment from "../entities/Appointment";
import IAppointmentDto from "../interfaces/IAppointmentDto";

const createAppointmentModel = AppDataSource.getRepository(Appointment)

export const createAppointment = async (createAppointmentDto: IAppointmentDto): Promise<Appointment>=> {
    const newAppointment: Appointment = createAppointmentModel.create(createAppointmentDto);
    await createAppointmentModel.save(newAppointment);
    return newAppointment;
}