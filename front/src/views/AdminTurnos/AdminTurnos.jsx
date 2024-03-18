import { useEffect, useState } from 'react';
import Turno from '../../components/AdminAppointment/Turno';
import axios from 'axios';
import styles from '../../components/AdminAppointment/Turno.module.css';

const MisTurnos = () => {
  const [misTurnos, setMisTurnos] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/appointments")
      .then(response => response.data)
      .then(MisTurnosDB => setMisTurnos(MisTurnosDB))
      .catch(error => console.log(error.message))
  }, []);

  return (
    <div>
      <div className={styles.titulo}>
      <h1>Mis Turnos</h1>
      </div>
      <div className={styles.turn_titles}>
        <h3>Fecha</h3>
        <h3>Hora</h3>
        <h3>Estado</h3>
      </div>
      {misTurnos.map((turno) => (
        <Turno
          key={turno.id}
          date={turno.date}
          time={turno.time}
          status={turno.status}
          user={turno.user} // Aqui traje la información de user (Que es como esta en mi appointments cuando trae el array) y lo muestro. 
        />
      ))}
    </div>
  );
};

export default MisTurnos;