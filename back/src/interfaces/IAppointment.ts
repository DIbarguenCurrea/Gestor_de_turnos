interface IAppointment {
    id: number; //ID numérico que identifica al turno.
    date: string; // fecha para la cual fue reservado el turno.
    time: string; // hora para la cual fue reservado el turno.
    userId: number; // ID del usuario que agendó el turno, referencia al usuario
    status: 'active' | 'canceled'; //Estado actual del turno, "activo" o cancelado.  
}

export default IAppointment;