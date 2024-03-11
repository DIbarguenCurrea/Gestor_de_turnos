import { useState } from 'react'
import Styles from './LoginUser.module.css'
import validationUser from '../../helpers/validateUser';
import axios from 'axios';

function LoginUser() {
  const [input, setInput] = useState({
    username: "",
    password: "", 
  });

  const [errors, setErrors] = useState({
    username: "Debe ingresar su nombre de usuario",
    password: "Debe ingresar su contraseña"
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(validationUser({
      ...input,
      [name]: value,
    }))
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(Object.values(errors).some((error) => error !== null)) {
      alert ("Usuario y Contraseña incorrectos")
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/users/login", input)
      console.log(response.data);
      alert(
        `Login successful`);
        setInput({
          username: "",
          password: "",
        });
    } catch (error) {
      console.log(error);
      alert("Ocurrio un error al iniciar sesión");
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className={Styles.container}>
        <label htmlFor="username">Username:</label> 
        <input 
          type="text"
          name="username"
          id="username"
          value={input.username}
          placeholder="Ingresa tu Usuario"
          onChange={handleChange}
          className={Styles.input}
        />
        <label htmlFor="password">Password:</label> 
        <input 
          type="password"
          name="password"
          id="password"
          value={input.password}
          placeholder="***********"
          onChange={handleChange}
          className={Styles.input}
        />
        <button 
         type="submit" 
         disabled={
          errors.username ||
          errors.password
         }
         className={Styles.button}
        >
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default LoginUser;