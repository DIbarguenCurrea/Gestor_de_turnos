import centroMedicoEps from '../../assets/centroMedicoEps.png';
import style from './NoticiasHome.module.css'

function NoticiasHome() {
  return (
    <div>
    <h1>BIENVENIDOS</h1>
        <div className={style.imgtextContainer}>
        <img src={centroMedicoEps} alt="centroMedicoEps" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab perferendis praesentium possimus sapiente temporibus ad nemo autem illo sint? Possimus laboriosam praesentium quaerat qui quae officiis asperiores illo vel?</p>
        </div>
    </div>
  )
}

export default NoticiasHome
