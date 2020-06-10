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
    clientes.push(req.body);
    res.status(200).json({
        mensaje: 'El cliente se ha creado correctamente'
    })
})






app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})