export function validar (input) {
    const tipoInput = input.dataset.tipo;
    if (validadores[tipoInput]){
        validadores[tipoInput](input);
    }
    //*Validar container
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
    }else {
        input.parentElement.classList.add("input-container--invalid");
    }
}

const mensajeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio."
    },
    email: {
        valueMissing: "Este campo no puede estar vacio.",
        typeMismatch: "El correo no es valido."
    },
    password: {
        valueMissing: "Este campo no puede estar vacio.",
        /*patterMissing: "",*/
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio.",
        customError: "Debes tener al menos 18 años de edad",
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio.",
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio.",
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio.",
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio.",
    },
}

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

function validarNacimiento(input) {
    const fechaNacimiento = new Date(input.value);
    let mensaje = "";

    if (!mayorEdad(fechaNacimiento)){
        mensaje = "Debes tener al menos 18 años de edad.";
    }

    input.setCustomValidity(mensaje);
}

function mayorEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
}