import avatar from '../../assets/avatar.png'
import style from './NavBar.module.css'



function NavBar() {
  return (
    <div className={style.NavContainer}>
        <div>
            <h2>GESTOR DE TURNOS</h2>
        </div>
        <div className={style.links}>
            <a href="/">HOME</a>
            <a href="/">RESERVE</a>
            <a href="/">CONTACT</a>
        </div>
        <div className={style.avatar}>
            <img src={avatar} alt="avatar" />
        </div>
    </div>
  )
}

export default NavBar;