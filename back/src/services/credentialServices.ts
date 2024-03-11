import { AppDataSource } from "../config/data-source";
import Credential from "../entities/Credential";
import ICredentialDto from "../interfaces/ICredentialDto";

const credentialModel = AppDataSource.getRepository(Credential);

//Servicio para Crear Credencial
export const createCredential = async (createCredentialDto: ICredentialDto): Promise<Credential> => {
    const newCredential: Credential = credentialModel.create(createCredentialDto)
    await credentialModel.save(newCredential);
    return newCredential;
};

//Servicio para Validar Credencial
export const validateCredential = async (validateCredentialDto: ICredentialDto): Promise<Credential> => {
    const { username, password} = validateCredentialDto;
    const foundCredential: Credential | null = await credentialModel.findOneBy({ username });
    if(!foundCredential) throw Error ('Usuario no encontrado');
    if(password !== foundCredential.password)throw Error ("Contraseña incorrecta");
    return foundCredential;
}