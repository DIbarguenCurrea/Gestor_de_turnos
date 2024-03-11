import { AppDataSource } from "../config/data-source";
import Credential from "../entities/Credential";
import User from "../entities/User";
import IUserDto from "../interfaces/IUserDto";
import { createCredential } from "./credentialServices";


// INTERFACES 

// REPOSITORIO 

const userModel = AppDataSource.getRepository(User);

// SERVICIOS

// Traer el detalle de todos los usuarios con su relación de turnos.

export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await userModel.find({
        relations: { appointments: true}
    });
    return allUsers;
}

// Retornar solamente un usuario con su relación de turnos. 

export const getUserByIdServices = async (id: number): Promise<User | null> => {
// Sí encuentra el id, retorma el usario solicitado. 
    const foundUser: User | null = await userModel.findOne({
        where: { id }, relations: ['appointments']
    })
// De lo contrario imprime el error message.
    if(!foundUser) throw Error ("Usuario no encontrado");
    return foundUser;
}

// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.

export const createUserService = async ( createUserDto: IUserDto): Promise<User> => {
    // Creamos nuestra nueva constante que es igual (await) al createCredential que lo importa de nuestro archivo createCredential.ts
    const newCredencial: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });
    const newUser: User = userModel.create(createUserDto);
    await userModel.save(newUser);

    newUser.credential = newCredencial;
    await userModel.save(newUser);

    return newUser;    
}

// Aqui validamos los datos de las credenciales para dar acceso al Login. 

export const findUserByCredentialId = async (credentialId: number): Promise<User | null> => {
    const foundUser: User | null = await userModel.findOneBy ({
        credential: { id: credentialId}
    });
    return foundUser
}

