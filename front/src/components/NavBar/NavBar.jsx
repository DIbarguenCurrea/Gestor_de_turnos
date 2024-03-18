import avatar from '../../assets/avatar.png'
import style from './NavBar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAppoitments, setUserData } from '../../redux/userSlice';



function NavBar() {
  //Traer Login del estado global - usar useSelector
  const login = useSelector(state => state.actualUser.userData.login);
  const dispatch = useDispatch (); 
  const navigate = useNavigate();

  const handleLogout = () => { 
    const confirmed = window.confirm("¿Estás seguro de cerrar sesión?");
    if (confirmed) {
      dispatch(setUserData({}));
      dispatch(setUserAppoitments({}));
      navigate("/landing")
    }
  }

  return (
    <div className={style.NavContainer}>
        <div>
            <h2>GESTOR DE TURNOS</h2>
        </div>
        <div className={style.links}>
            <NavLink to="/home" >
              <span>Home</span>
            </NavLink> 
            {
              login &&
                <NavLink to="/reservations" >
                  <span>Reservations</span>
                </NavLink>
            }
            <NavLink to="/contact" >
              <span>Contact</span>
            </NavLink>
            {
              login  &&
                <NavLink to="/">
                  <span onClick={handleLogout}>Logout</span>
                </NavLink>
            }
        </div>
        {!login &&
        <div className={style.avatar}>
            <Link to="/login">
              <img src={avatar} alt="avatar" />
            </Link>
        </div>
        }
    </div>
  )
}

export default NavBar;