import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAppoitments } from '../../redux/userSlice';
import UserAppointments from '../../components/UserAppointments/UserAppointments';
import styles from '../../components/UserAppointments/UserAppointments.module.css'
import { Link } from 'react-router-dom';
const GETUSERBYID_URL = "http://localhost:3000/users/";
const CANCEL_URL = "http://localhost:3000/appointments/cancel/";

function Appointments () {
  
    const actualUserId = useSelector(state => state.actualUser?.userData?.user?.id);
      // console.log(actualUserId)
    const appointments = useSelector(state => state.actualUser.userAppointments)
      // console.log(appointments);
    const dispatch = useDispatch();

    useEffect (() => {
      axios
      .get(GETUSERBYID_URL + actualUserId)
      .then((response) => response.data.appointments)
      .then(appointments => dispatch(setUserAppoitments(appointments)))
      .catch((error) => console.log(error.message));
    }, [actualUserId, dispatch]);

    const handleAppointmentCancel = (appointmentId) => {
      axios
       .put(CANCEL_URL + appointmentId)
       .then(response => response.data)
       .then(data => {
        axios 
          .get(GETUSERBYID_URL + actualUserId)
          .then((response) => response.data.appointments)
          .then(appointments => dispatch(setUserAppoitments(appointments)))
          .catch((error) => console.log(error.message));
       })
       .catch(error => alert(`Error la cancelar reserva: ${error?.response?.data?.message}`));
    }


  return (
    <div>
      <h1>Mis Turnos</h1> 
      <div className={styles.link_button}>
      <Link to="/reserve">Crear Nuevo Turno</Link>
      </div>
      <div className={styles.turn_titles}>
        <h3>Fecha</h3>
        <h3>Hora</h3>
        <h3>Estado</h3>
      </div>
      { appointments.length 
        ?
          appointments.map((appointment) => (
            <UserAppointments
              key={appointment.id}
              id={appointment.id}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
              handleAppointmentCancel={handleAppointmentCancel}
            />
          ))
        : 
        <h6>No hay reservas.</h6>
      }
    </div>
  )
}

export default Appointments;