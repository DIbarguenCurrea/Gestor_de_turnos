# Gestor de Turnos

--------------------------------------------------------

<p>Este proyecto esta creado con el fin de simular el proceso de registro de un nuevo usuario, iniciar sesión y realizar las peticiones de crear un turno y cancelar el mismo turno.</p>

<h3>Características</h3>

- Gestión de turnos para práctica.
- Funcionalidades de crear usuario, crear turno y cancelacion de turno.
- Interfaz de usuario intuitiva.
- Implementación de estructura de diseño de base de datos para guardar la información. 

<h3> Tecnologías Utilizadas </h3> 

**Frontend:** *HTML, CSS, JavaScript y React.js* 
<br>
**Backend:** *Node.js, TypeScript, TypeORM, Express.js y PostgreSQL* 
<br>
**Herramientas:** *VSCode, SQL Shell (psql) y GitHub,* 

<h3>Instalación</h3>

- Clonar el repositorio desde GitHub.
- Ubicarte en la ruta de la carpeta **/back** e instalar las dependencias usando *npm install*.
- Configurar variables de entorno, debes crear un archivo *.env* en la raiz de la carpeta **/back**.

He aquí un ejemplo de la configuración de tu archivo *.env*: 
 ``` 
PORT = 3000
DB_HOST = localhost
DB_PORT =  5432
DB_USER = postgres
DB_PASSWORD = "Escribe aquí tu contraseña" de SQL Shell (psql)
DB_NAME = gestor_turnos_db 

```

- Inicia el servidor local desde la ruta */Gestor_de_turnos/back* en tu terminal de trabajo usando **npm start**.

- Levanta el proyecto desde la ruta */Gestor_de_turnos/front* usado **npm run dev**.


<h3>Uso</h3>

Te recomiendo seguir los siguientes pasos para entender el proyecto: 

**Paso 1**

Una vez que esté instalada, configurada las depedencias e iniciado el servidor, debes registrarte.

Estas ubicado en la landing del proyecto, das click en el bóton "Registrate", esto te enviara al formulario de registro. 

Esto son algunos datos que puedes usar para el formulario.

*Ejemplo:*
```
{
  Nombre: Patricio Estrella
  Correo electrónico: pEstrella@mail.com
  Fecha de Nacimiento: 2000-01-01
  DNI: 12345678
  Username: pEstrella
  Password: 1234
}
```

**Paso 2**

Luego, de registrar el usuario, puedes visualizar en la base de datos de SQL Shell (psql) el usuario que acabas de crear. *Recuerda que este lo encuentras en la base de datos que haz creado inicialmente, como por ejemplo: gestor_turnos_db*.

**Paso 3**

Inicia Sesión y creacion del turno. 

Para ello, ingresas con la información del username y password que haz creado previamente. 

Podras visualizar que se habilita la navegación la vista de *Reservations*, cuando ingreses te aparecera el bóton de "Crear Nuevo Turno". Te envíara a la vista de "reserve" donde podrás ingresar una fecha y una hora según tu preferencia.

*Recuerda que solo puedes realizar este proceso si te encuentras logueado*

Ejemplo: 

````````````
Fecha: 2024-01-01
Hora: 10:00
````````````
**Paso 4**

Una vez reservado el turno, te sera redirigido a la vista de *Reservations* donde podrás visualizar el turno creado, esto también lo podrás visualizar en la base de datos de SQL Shell (psql). 

**Paso 5**

Como puedes observar en la vista de *Reservations* tienes un bóton de "cancelar" el cual te permitira cancelar el turno creado. **Intentalo**.

Puedes registrar y cancelar los turnos que desees. 

**Extra** 

Utiliza el siguiente path *http://localhost:5173/misturnos* para ver todos los turnos que haz creado y adicional a esto, si realizas más creaciones de usuario podrás ver el detalle del turno a quien esta asignado. 


<h3>Créditos</h3>

<p>En este momento no hay un nosotros. Estoy dirigiendo este proyecto solo. Así que cada comentario que proporciones, cualquier sugerencia que tengas y cualquier idea nueva que te guste compartir, no lo dudes, escribeme de inmediato.</p>

<h3>Contacto</h3>

**Correo electrónico:** *dibarguenc@gmail.com*.

