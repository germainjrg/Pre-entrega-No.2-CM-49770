const encendido = true;
const apagado = false;

function equipo (nombre, estado, tipo) {
    this.nombre = nombre;
    this.estado = estado;
    this.tipo = tipo;
}

equipo1 = new equipo ("Luces", "apagado", "Iluminacion");
equipo2 = new equipo ("TV", "apagado", "Entretenimiento");
equipo3 = new equipo ("Home Theater", "apagado", "Entretenimiento");
equipo4 = new equipo ("Computadora", "encendido", "Trabajo");
equipo5 = new equipo ("Lavadora", "encendido", "Limpieza");
equipo6 = new equipo ("Secadora", "apagado", "Limpieza");
equipo7 = new equipo ("Refrigeradora", "encendido", "Comida");
equipo8 = new equipo ("Cocina", "apagado", "Comida");
equipo9 = new equipo ("Lavavajillas", "apagado", "Limpieza");

let equiposDeCasa = [equipo1, equipo2, equipo3, equipo4, equipo5, equipo6, equipo7, equipo8, equipo9];

inicio ();

function inicio () {
    alert("Bienvenido a app de asistencia del hogar. \nPor favor, abre la consola y reinicia la pagina para comenzar.");
    console.log("Estos son los equipos de tu hogar:");
    console.table(equiposDeCasa);
    
    let consulta = parseInt(prompt("¿Quieres ver los equipos segun su estado? \n Escribe 1 para los encendidos. \n Escribe 0 para los apagados."));

    let equiposConsultados = equiposDeCasa.filter(function(equipo) {
        
        if (consulta == 1) {
            return equipo.estado == "encendido";
        } else {
            return equipo.estado == "apagado";
        }
        
    });

    console.table(equiposConsultados);

    if (confirm("¿Quieres cambiar el estado de algun equipo?")) {
        let equipo_a_modificar = prompt("Escribe el nombre del equipo a encender/apagar").toLowerCase();
    } else {
        alert("Gracias por usar el asistente del hogar.");
    }
} 