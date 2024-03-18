# README

<h1>Proyecto Modulo 3 - Planificación Estructura Gestion de Turnos - EPS Sanitas</h1>

--------------------------------------------------------

##

<h2>User Stories</h2>

**Usuario Invitado**	
*Como invitado quiero:*
```
Visualizar la aplicación (excepto reservar turno)
Chat con el bot	
Crear cuenta
```

**Usuario Registrado** 
*Como Registrado quiero:*
``` 
Login / Logout
Cambiar datos: Agrega foto de perfil
Eliminar Usuario
Revervar turno: 
            Elegir fecha y hora
            Recibir confirmacion por email
Visualizar mis turnos 
Cancelación de mis turnos: 
            Alerta de Cancelación
            Confirmación email
```
                    
                   
**Administrador**	
*Como Admin quiero:*
```
Mostrar dias y horarios disponibles
Administrar Usuarios
Visualizar turnos reservados
```
--------------------------------------------------------------

<h3>Página de Bienvenida</h3> Información general de la empresa.
<h4>Navbar</h4> 

- Intuitivo
- Siempre Visible
- Logo empresa
- Login

<h4>Footer</h4> Informacion de Contacto y sucursal.

-------------------------------------------------------------


**Home**
*NavBar (link)*
```
Noticias de la entidad 	
Link para reservar turnos 	
Login Para reservar
Registrarse
```

**Reserva turnos**
*NavBar (link)*
```
Login 	
Registrarse	
```

**Formulario para turnos**
*(Una vez registrado aparecera la función de reservar turno)*
```
Nombre y Apellido	
Nro Identificacion	
Fecha	
Hora	
Especialista // Doctor asignado	
Recomendaciones	
```

**Contactenos**
*NavBar (link)*
```
Formulario de PQR	
Direccion 	
Email
```


### Modelo Entidad / Relación

![DBRelaciones](./assets/DB%20Relaciones.png)

#### APPOINTMENT	        USUARIO		        CREDENCIALES
        id (PK)		        id (PK)		        id (PK)
        date		        name		        username
        time		        email		        password
        userId (FK)	        birthdate		
		status              nDni
                            credentialId (FK)


## Diagrama DB Entidad-Relación
![DBDiagram](./assets/DB%20Diagram.png)

<h6> 
NOTA: Revisar el Readme.md de la carpeta Front para realizar las pruebas correspondientes. 
</h6> 