import { useState } from 'react';
import styles from './Turno.module.css';

//Uso el user como prop para usarlo en el return
const Turno = ({ date, time, status, user }) => {
    const [showUserInfo, setShowUserInfo] = useState(false);

    const handleShowUserInfo = () => {
    setShowUserInfo(!showUserInfo);
    };

  return (
    <div>
      <div className={styles.turn}>
        <p className={styles.turn_date}>{date}</p>
        <p className={styles.turn_time}>{time}</p>
        <p className={styles.turn_status}>{status}</p>
        <button className={styles.turno_details} onClick={handleShowUserInfo}>
          {showUserInfo ? 'Ocultar detalle' : 'Ver detalle'}
        </button>
        {showUserInfo && (
          <div>
            {user ? (
              <> 
                <p>Nombre: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Fecha de nacimiento: {user.birthdate}</p>
                <p>DNI: {user.nDni}</p>
              </>
            ) : (
              <p>No se encontró información del usuario.</p>
            )}
          </div>
        )} 
      </div>
    </div>
  );
};

export default Turno;