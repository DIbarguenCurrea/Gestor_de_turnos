import { useState } from 'react'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Styles from './CreateAppointment.module.css'
import axios from 'axios';
const POSTAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

function CreateAppointment () {

    const initialState = {
        date: "",
        time: "",
    };
    
    const [appointment, setAppointment] = useState(initialState);
    const userId = useSelector(state => state.actualUser?.userData?.user?.id); 
    const navigate = useNavigate();
    const [errors, setErrors] = useState ();

    const validateAppointment = ({
      date,
      time
    }) => {
        const errors = {};
        if (!date) errors.date = "Ingresar fecha";
        if (!time) errors.time = "ingresa una hora";
        return errors;
    };
     
    const handlSubmit = (event) => {
        event.preventDefault();

        const newAppointment = {
            date: appointment.date,
            time: appointment.time,
            userId
        }

        if (Object.values(errors).some((error) => error !== null)) {
            alert("Por favor seleccione una fecha y una hora.");
            return;
        }
        
        axios
        .post(POSTAPPOINTMENT_URL, newAppointment)
        .then(({data}) => data)
        .then((appointmentInDB) => {
            alert(`Nuevo Turno Creado: 
            fecha: ${appointmentInDB.date}, hora: ${appointmentInDB.time}`);
            navigate("/reservations");
        })
        .catch((error) => alert(error.message)); 
    }   

    const handleChange = (event) =>{
        const {value, name} = event.target;
        setAppointment({ ...appointment, [name]: value});
        setErrors(validateAppointment({ ...appointment, [name]: value}));
    }

    const formAppointment = [
        {
            label: "Fecha: ",
            name: "date",
            type: "date",
            placeholder: "Ingresa una fecha"
        }, 
        {
            label: "Hora: ",
            name: "time",
            type: "time",
            placeholder: "Ingresa una hora"
        }
    ]
   
  return (
    <div className={Styles.container}>
        <h4>Crear Turno</h4>
        <br />
        <form onSubmit={handlSubmit}>
            {formAppointment.map(({ label, name, type, placeholder }) => {
                return (
                    <div key={name}>
                        <label htmlFor={name}>{label}</label>
                        <input 
                            type={type}
                            id={name}
                            name={name}
                            value={appointment[name]}
                            placeholder={placeholder}
                            onChange={handleChange}
                        />
                    </div>
                );
            })}
            <button 
            type="submit" 
            disabled={Object.keys(appointment).some((e) => !appointment[e])}
            >
                Reservar
            </button>
        </form>
    </div>    
  )
}

export default CreateAppointment;