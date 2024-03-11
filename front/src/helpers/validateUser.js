export default function validationUser (input) {
    const usernameRefExp = /^([A-Z]{1})([0-9]{8})$/;
    const passwordRefExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-])[a-zA-Z0-9!@#$%^&*()-]{8,16}$/;
    const errors = {};

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