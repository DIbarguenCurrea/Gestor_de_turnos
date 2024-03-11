import { AppDataSource } from "../config/data-source";
import Appointment from "../entities/Appointment";
import User from "../entities/User";
import IAppointmentDto from "../interfaces/IAppointmentDto";

// INTERFACES

// REPOSITORIO

const appointmentModel = AppDataSource.getRepository(Appointment);
const userModel = AppDataSource.getRepository(User);

// SERVICIOS

//Implementar una función que pueda retornar el arreglo completo de turnos.
export const getAllAppointmentsServices = async (): Promise<Appointment[]> => {
    const allAppointments: Appointment[] = await appointmentModel.find({
        relations: { user: true}
    })
    return allAppointments;
}

//Implementar una función que pueda obtener el detalle de un turno por ID.

export const getAppointmentByIdServices = async (id: number): Promise<Appointment> => {
    // Sí encuentra el id, retorma el turno solicitado. 
        const foundAppointment: Appointment | null = await appointmentModel.findOneBy ({
            id: id,
        })
    // De lo contrario imprime el error message.
        if(!foundAppointment) throw Error (`Turno con ID ${id} no encontrado`);
        return foundAppointment;
}

//Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 

export const createAppointmentServices = async ( createAppointmentDto: IAppointmentDto): Promise<Appointment> => {

    const newAppointment: Appointment = appointmentModel.create(createAppointmentDto);
    await appointmentModel.save(newAppointment);

    const user: User | null = await userModel.findOneBy({
        id: createAppointmentDto.userId,
    });

    if (!user) {
        throw new Error("El ID de usuario es obligatorio para crear un turno.");} newAppointment.user = user;

    await appointmentModel.save(newAppointment);
    return newAppointment;

}

//Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.

// La función cancelAppointment toma el ID de un turno como parámetro.
export const cancelAppointment = async (id: number): Promise<void> => {
    //Utilizo  el método .findOneBy para buscar el turno en el arreglo appointmentModel por su ID.
    const foundAppointmentId: Appointment | null = await appointmentModel.findOneBy({
        id: id,
    });
    //Si el turno no se encuentra (!foundAppointmentId), se lanza el error
    if (!foundAppointmentId) {
        throw Error(`No se encontró un turno con el ID ${id}.`);
    }
    //Si el turno es encontrado se cambia su status a "canceled".
    foundAppointmentId.status = 'canceled';
    await appointmentModel.save(foundAppointmentId);
};

