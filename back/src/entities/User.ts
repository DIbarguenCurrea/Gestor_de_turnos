import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({ name: "users"})
class User {
    @PrimaryGeneratedColumn() // Esta propiedad es para que genere un id incremental de manera automática.
    id: number

    @Column()
    name: string
    
    @Column({ unique: true})
    email: string

    @Column()
    birthdate: string

    @Column()
    nDni: string


    // Las relaciones eran de User 1:1 Credential
    //Usamos el metodo OneToOne que recibe un callback desde Credential(que fue la que creamos)
    @OneToOne(() => Credential)
    //Hacemos el JoinColumn para que una las tablas 
    @JoinColumn ()
    credential: Credential


    // Las relaciones eran de User 1:N Appointment
    @OneToMany(() => Appointment, (appointment) => appointment.user)
    //ahora le decimos que tipo de dato va ser appointments
    appointments: Appointment[]
}

export default User;