
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if(err) {
            throw new Error('No se pudo guardar la tarea por hacer');
        }
    });
}

const cargarDB = () => {
    listadoPorHacer = require('../db/data.json');
}

let crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: true
    };

    cargarDB();

    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer;
}

module.exports = {
    crear
}