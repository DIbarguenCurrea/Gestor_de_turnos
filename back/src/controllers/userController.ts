import { Request, Response } from "express"
import { createUserService, findUserByCredentialId, getAllUsersService, getUserByIdServices } from "../services/userService";
import { validateCredential } from "../services/credentialServices";
import User from "../entities/User";
import Credential from "../entities/Credential";

// GET /users => Obtener el listado de todos los usuarios.

export const getAllUsers = async (req: Request, res: Response)=> {
    const users: User[] = await getAllUsersService ();
    res.status(200).json (users)
};

// GET /users/:id => Obtener el detalle de un usuario específico.

export const getUserById = async (req:Request , res: Response) => {
    const { id } = req.params;
    try {
        const foundUser = await getUserByIdServices(Number(id));
        res.status(200).json (foundUser);
    } catch (error: any) { 
        res.status(400).json ({ message: error.message})
    }
};

// POST /users/register => Registro de un nuevo usuario.

export const register = async (req:Request , res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password} = req.body;
        const newUser: User = await createUserService({
            name, email, birthdate, nDni, username, password
        });
        res.status(200).json (newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message});
    }    
};
// POST /users/login => Login del usuario a la aplicación.

export const login = async (req:Request , res: Response) => {
    const { username, password} = req.body;
    try { 
        const loginCredential = await validateCredential({
          username, password
        });
        const user = await findUserByCredentialId (loginCredential.id);
        res.status(200).json ({ login:true, user });
        }catch (error: any) {
            res.status(400).json({ message: error.message});
        }
};

// DELETE de la base datos por Id de usuario o nombre. (toda la información y relaciones)