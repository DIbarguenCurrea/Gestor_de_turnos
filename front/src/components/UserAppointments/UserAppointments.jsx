import styles from '../UserAppointments/UserAppointments.module.css'

function UserAppointments ({ 
  id,
  date, 
  time, 
  status,
  handleAppointmentCancel
}) {

  date = new Date(date);
  const formatDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` ;
  const handleClick = () => {
    if (
      window.confirm(
        `¿Deseas cancelar la reserva del día ${formatDate} a las ${time} hs?`
      )) {
        handleAppointmentCancel(id);
      }
  }

  return (
    <div>
        <div className={styles.turn}>
        <span className={styles.turn_date}>{formatDate}</span>
        <span className={styles.turn_time}>{time}</span>
        { status === "active" ? (
          <span className={styles.active}>
              Activo
          </span> 
        ) : (
          <span className={styles.cancelled}>Cancelado</span>
        )}
        {status !== "canceled" && (
          <button className={styles.buttonCancelled} onClick={handleClick}>
            Cancelar
          </button>
          )} 
        </div>
    </div>
  );
}

export default UserAppointments;
