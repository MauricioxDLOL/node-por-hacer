
const descripcion = {

    demand: true,
    alias: "d",
    desc: "Descripción de la tarea por hacer"

}



const argv = require("yargs")
                    .command("crear","Crea una tarea por hacer",{descripcion})
                    .command("actualizar", "Actualiza una tarea por hacer",{descripcion,

                        completado: {

                            alias: "c",
                            desc: "Descripcion de la tarea por actualizar",
                            default: true

                        }
                    })
                    .command("listar","Lista todas las tareas",{

                        completado: {

                            alias: "c",
                            desc: "Descripcion de la tarea por actualizar",
                            default: false
                           
                           
                        }

                    })
                    .command("borrar","Elimina una tarea",{descripcion})
                    .argv;


module.exports = {
    argv
}