import Styles from './Contact.module.css';

function ContactPage() {
  return (
    <div className={Styles.contactContainer}>
      <div className={Styles.columnForm}>
        <form className={Styles.contactForm}>
          <div className={Styles.boxInfo}>
            <label htmlFor="name" className={Styles.form_label}>Nombre</label>
            <input type="text" className={Styles.form_control} name="name" id="name"  placeholder="Ingresa tu nombre" />
          </div>
          <div className={Styles.boxInfo}>
            <label htmlFor="email" className={Styles.form_label}>Correo Electronico</label>
            <input type="email" className={Styles.form_control} name="email" id="email" placeholder="name@example.com"/>
          </div>
          <div className={Styles.boxInfo}>
            <label htmlFor="description" className={Styles.form_label}>Descripción</label>
            <textarea type="description" className={Styles.form_control} name="description" id="description" rows="3"></textarea>
          </div>
          <div>
            <input type="submit" className={Styles.button} value="Enviar" />
          </div>  
        </form>
      </div>
      <div className={Styles.column}>
        <h5>Contáctenos</h5>
        <p>En este momento no hay un nosotros. Estoy dirigiendo este proyecto solo. Así que cada comentario que proporciones, cualquier sugerencia que tengas y cualquier idea nueva que te guste compartir, no lo dudes, escribeme de inmediato.</p>
      </div>
    </div>
  )
}

export default ContactPage;
