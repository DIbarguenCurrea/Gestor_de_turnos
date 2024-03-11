import { useState } from 'react'
import Styles from './CreateRegister.module.css'
import validations from '../../helpers/validateForm';
import axios from 'axios';

function CreateRegister () {
    const [input, setInput]= useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({
      name: "Debe ingresar un nombre",
      email: "Debe ingresar un enail",
      birthdate: "Debe ingresar una fecha",
      nDni: "Debe ingresar un DNI",
      username: "Debe ingresar un username",
      password: "Debe ingresar un password"
    })
    
    const handlChange = (event) => {
        // console.log(event.target.value)
        setInput({
          ...input,
          [event.target.name]: event.target.value,
          [event.target.email]: event.target.value,
          [event.target.birthdate]: event.target.value,
          [event.target.nDni]: event.target.value,
          [event.target.username]: event.target.value,
          [event.target.password]: event.target.value
        });
        setErrors(validations({
          ...input,
          [event.target.name]: event.target.value,
          [event.target.email]: event.target.value,
          [event.target.birthdate]: event.target.value,
          [event.target.nDni]: event.target.value,
          [event.target.username]: event.target.value,
          [event.target.password]: event.target.value
        }));
    }

    const handlSubmit = async (event) => {
      event.preventDefault();

      if (Object.values(errors).some((error) => error !== null)) {
        alert("Existe errores en el formulario, por favor corregirlos");
        return;
      }
      try {
        const response = await axios.post("http://localhost:3000/users/register", input);
        console.log(response.data);
        alert (
          `Usuario registrado con éxito!`);
          setInput({
            name: "",
            email: "",
            birthdate: "",
            nDni: "",
            username: "",
            password: "",  
          });
      } catch (error) {
        console.log(error);
        alert("Ocurrió un error al registrar el usuario");
      }
    };

   
  return (
    <div>
        <form onSubmit={handlSubmit} className={Styles.container}>
        <label htmlFor="name">Nombre:</label>
        <input
        type="text" 
        name="name" 
        id="name" 
        value={input.name} 
        placeholder="Ingresa tu nombre" 
        onChange={handlChange}/> 
        <p style={{color: "red" }}>{errors.name ? errors.name : null}</p>
        <br />
        <label htmlFor="email">Correo Electronico:</label>
        <input
        type="email" 
        name="email" 
        id="email" 
        value={input.email} 
        placeholder="Ingresa tu email" 
        onChange={handlChange}/>
        <br />
        <label htmlFor="birthdate">Fecha de Nacimiento:</label>
        <input
        type="text" 
        name="birthdate" 
        id="birthdate" 
        value={input.birthdate} 
        placeholder="Ingresa tu Cumpleaños" 
        onChange={handlChange}/>
        <br />
        <label htmlFor="nDni">DNI:</label>
        <input
        type="text" 
        name="nDni" 
        id="nDni" 
        value={input.nDni} 
        placeholder="Ingresa tu DNI" 
        onChange={handlChange}/>
        <br />
        <label htmlFor="username">Username:</label>
        <input
        type="text" 
        name="username" 
        id="username" 
        value={input.username} 
        placeholder="Crea un nombre de alias" 
        onChange={handlChange}/>
        <br />  
        <label htmlFor="password">Contraseña</label>
        <input
        type="password" 
        name="password" 
        id="password" 
        value={input.password} 
        placeholder="Crea una contraseña" 
        onChange={handlChange}/>
        <br />
        <button 
         type="submit" 
         disabled={ 
          errors.name || 
          errors.email || 
          errors.birthdate || 
          errors.nDni || 
          errors.username || 
          errors.password 
          } 
        >
          Registrarse
        </button>
        </form>
    </div>
  )
}

export default CreateRegister;