
const fs = require("fs");

let listadoPorHacer = new Array();

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("./db/data.json",data,(err)=>{

        if(err) throw new Error("No se pudo grabar");

    })

}

const cargarDb = () => {

    try{

        listadoPorHacer = require("../db/data.json");

    }catch(error){

        listadoPorHacer = [];

    }

    return listadoPorHacer

}

const getListado = (completado = false) => {

    cargarDb();


    if(completado){

        let nuevoListado = listadoPorHacer.filter(tarea => {


           
            return tarea.completado === true;

        })

        listadoPorHacer = nuevoListado;

        return listadoPorHacer

    }


    return cargarDb();

}

const actualizar = (descripcion,completado = true) => {

    cargarDb();

    let index = listadoPorHacer.findIndex((tarea)=>{

        return tarea.descripcion === descripcion;

    })

    if(index >=0){

        listadoPorHacer[index].completado = completado;
        guardarDB();

        return true;
    }else{
        return false;
    }

}

const crear = (descripcion) => {

    cargarDb();

    let existe = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;
    })

    if(existe >= 0){

        console.log(`La tarea ${descripcion} ya existe culiao`);
        return;
    }

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    return porHacer; 

}

const borrar = (descripcion) => {

   cargarDb();

   let nuevoListado = listadoPorHacer.filter(tarea => {
       
    return tarea.descripcion !== descripcion;
    
   })

   if(listadoPorHacer.length === nuevoListado.length){
       return false;
   }else{

    listadoPorHacer = nuevoListado;

   }


    guardarDB();

    return descripcion;


}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}