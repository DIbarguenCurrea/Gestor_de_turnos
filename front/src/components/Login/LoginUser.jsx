import { useState } from 'react'
import Styles from './LoginUser.module.css'
import validationUser from '../../helpers/validateUser';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/userSlice';

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
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    if(Object.values(errors).some((error) => error !== null)) {
      alert ("Usuario y Contraseña incorrectos")
      return;
    }

    axios
      .post("http://localhost:3000/users/login", input)
      .then (response => response.data)
      .then (data => {
        dispatch(setUserData(data));
        alert("Login Sucesfull")  
        navigate("/home");
      })
      .catch ((error) => 
      alert (`Acceso denegado: ${error?.response?.data?.message}` )
      );
    };

  return (
    <div>
      <form onSubmit={handleSubmit} className={Styles.container}>
      <h1>Iniciar Sesión</h1>
        <label htmlFor="username"></label> 
        <input 
          type="text"
          name="username"
          id="username"
          value={input.username}
          placeholder="Usuario"
          onChange={handleChange}
          className={Styles.input}
        />
        <label htmlFor="password"></label> 
        <input 
          type="password"
          name="password"
          id="password"
          value={input.password}
          placeholder="Contraseña"
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
        <div>
        <p>¿Olvidó su contraseña?</p>
        <p>¿No tienes cuenta?
          <Link to="/register" className={Styles.link_register}>
          <span> Regístrate </span>
          </Link>
        </p>
      </div>
      </form>
    </div>
  )
}

export default LoginUser;