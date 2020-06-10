const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let clientes = [
    { id: 1, nombre: 'Gas Natural', cif: 'A12345678', domicilio: 'Madrid'},
    { id: 2, nombre: 'Iberdrola', cif: 'A87654321', domicilio: 'Bilbao'},
    { id: 3, nombre: 'Planeta D\'Agostini', cif: 'A22224444', domicilio: 'Barcelona'},
];

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).json(clientes);
})

app.get('/:id', (req, res) => {
    let cliente = clientes.find(elem => {
        return elem.id == req.params.id;
    })
    res.status(200).json(cliente);
})

app.post('/', (req, res) => {
    
    let cliente = req.body;
    cliente.id = clientes[clientes.length - 1].id + 1;

    clientes.push(cliente);

    res.status(200).json({
        mensaje: 'El cliente se ha creado correctamente'
    })
})

app.put('/:id', (req, res) => {

    let posicion = clientes.findIndex(elem => {
        return elem.id == req.params.id;
    })

    if (posicion < 0) {
        res.status(200).json({
            mensaje: 'No se encontró el cliente'
        })
    } else {
        clientes[posicion].nombre = req.body.nombre;
        clientes[posicion].cif = req.body.cif;
        clientes[posicion].domicilio = req.body.domicilio;

        res.status(200).json({
            mensaje: 'El cliente se ha actualizado correctamente'
        })
    }

})





app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})