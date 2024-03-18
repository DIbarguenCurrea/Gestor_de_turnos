import { Link } from 'react-router-dom';
import style from './LandingPage.module.css'

function LandingPage() {
  return (
    <div className={style.landing_container}>
      <h1>Bienvenido al Gestor de Turnos</h1>
        <p>Organiza y gestiona tus turnos de forma fácil y eficiente.</p>
            <div className={style.buttons_container}>
                <Link to="/register">
                <button className={style.register_button}>Registrarse</button>
                </Link>
                <Link to="/login">
                <button className={style.login_button}>Iniciar sesión</button>
                </Link>
            </div>
            <div className={style.footer}>
              <footer >
                <h6>&copy; 2024 Gestor de turnos. Todos los derechos reservados.</h6>
              </footer>
            </div>
    </div>
  )
}

export default LandingPage;
