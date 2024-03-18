import noticia01 from '../../assets/imagen01.gif'
import noticia02 from '../../assets/imagen02.jpg'
import noticia03 from '../../assets/imagen03.jpg'
import style from './NoticiasHome.module.css'

function NoticiasHome() {
  return (
    <div>
        {[noticia01, noticia02, noticia03].map((imagen, index) => (

        <div key={index} className={style.imgtextContainer}>
        <img src={imagen} alt={`noticia${index + 1}`} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab perferendis praesentium possimus sapiente temporibus ad nemo autem illo sint? Possimus laboriosam praesentium quaerat qui quae officiis asperiores illo vel?</p>
        </div>
        ))}
    </div>
  )
}

export default NoticiasHome
