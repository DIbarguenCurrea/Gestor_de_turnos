export default function validations (input) {
    const emailRegExp = /[S+@][S+.]S+/;
    const birthdateRegExp = /^(0[1-9]|[1-2][0-9]|3[0-1])(0[1-9]|1[0-2])(19[0-9]{2}|20[0-9]{2})$/;
    const nDniRefExp = /^([0-9]{8})$/;
    const usernameRefExp = /^([A-Z]{1})([0-9]{8})$/;
    const passwordRefExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-])[a-zA-Z0-9!@#$%^&*()-]{8,16}$/;
    const errors = {};

    //Name
    if(!input.name) errors.name ="El nombre es obligatorio";
    else{
        if(input.name.length < 3) errors.name = "El nombre debe tener al menos 3 caracteres";
        if(input.name.length > 30) errors.name = "El nombre debe ser máximo de 30 caracteres"
        if(!input.name.trim()) errors.name ="Debe ingresar un nombre válido";
    }
    //email
    if(!input.email) errors.email ="El email es obligatorio";
    else{
        if(emailRegExp.test(input.email)) errors.email ="Debe ingresar un email válido";
        if(!input.email.trim()) errors.email ="Debe ingresar un email válido";
    }
    //birthdate

    if(!input.birthdate) errors.birthdate ="Fecha de Nacimiento es obligatorio";
    else{
        if(birthdateRegExp.test(input.birthdate)) errors.birthdate ="Debe ingresar una fecha válida";
        if(!input.birthdate.trim()) errors.birthdate ="Debe ingresar una fecha válida";
    }

    //dni
    if(!input.nDni) errors.nDni = "El DNI es obligatorio";
    else {
        if(nDniRefExp.test(input.nDni)) errors.nDni ="Debe incluir solo números";
        if(!input.nDni.trim()) errors.nDni ="Debe ingresar un DNI Válido";
    }

    //username

    if(!input.username) errors.username = "Username es obligatorio";
    else{
        if(usernameRefExp.test(input.username)) errors.username ="Debe incluir solo letras y números";
        if(!input.username.trim()) errors.username="Debe ingresar un Username Válido";
    }

    //password
    if(!input.password) errors.password ="Este campo es obligatorio"
    else{
        if(passwordRefExp.test(input.password)) errors.password ="La contraseña debe incluir (aA0!{8-16}";
        if(!input.password.trim()) errors.password="Debe ingresar un Password Válido";
    }

    return errors;
}