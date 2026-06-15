const express = require('express');
const app = express();

app.use(express.json());

let estudiantes = [
    { id: 1, nombre: 'Alejandro García', correo: 'alejandro.garcia@email.com', nota: 8.5 },
    { id: 2, nombre: 'Beatriz López', correo: 'b.lopez99@email.com', nota: 9.2 },
    { id: 3, nombre: 'Carlos Mendoza', correo: 'mendoza.carlos@email.com', nota: 7.8 },
    { id: 4, nombre: 'Diana Martínez', correo: 'diana.mtz@email.com', nota: 9.5 },
    { id: 5, nombre: 'Eduardo Torres', correo: 'e.torres.edu@email.com', nota: 6.4 },
    { id: 6, nombre: 'Fernanda Ruiz', correo: 'fer.ruiz.v@email.com', nota: 8.8 },
    { id: 7, nombre: 'Gabriel Soto', correo: 'g.soto_prof@email.com', nota: 7.3 },
    { id: 8, nombre: 'Helena Castro', correo: 'helena.castro@email.com', nota: 4.1 },
    { id: 9, nombre: 'Iván Delgado', correo: 'delgado.ivan@email.com', nota: 8.2 },
    { id: 10, nombre: 'Julia Ortega', correo: 'j.ortega.msn@email.com', nota: 9.7 },
    { id: 11, nombre: 'Kevin Blanca', correo: 'k.blanca88@email.com', nota: 5.0 },
    { id: 12, nombre: 'Laura Méndez', correo: 'laura.mendez@email.com', nota: 8.9 },
    { id: 13, nombre: 'Mario Silva', correo: 'silva.mario@email.com', nota: 7.5 },
    { id: 14, nombre: 'Natalia Ríos', correo: 'n.rios.academia@email.com', nota: 9.3 },
    { id: 15, nombre: 'Oscar Peña', correo: 'oscar.pena@email.com', nota: 3.5 },
    { id: 16, nombre: 'Patricia Luna', correo: 'p.luna.vance@email.com', nota: 8.6 },
    { id: 17, nombre: 'Quique Jara', correo: 'quique.jara@email.com', nota: 7.0 },
    { id: 18, nombre: 'Rosa Valdés', correo: 'r.valdes.g@email.com', nota: 9.4 },
    { id: 19, nombre: 'Sergio Pardo', correo: 'sergio.pardo@email.com', nota: 6.8 },
    { id: 20, nombre: 'Teresa Vega', correo: 't.vega.solis@email.com', nota: 9.0 },
];
let nextId = 21;

app.get('/api/estudiantes', (req, res) => {
    res.status(200).json({ total: estudiantes.length, estudiantes });
});

app.get('/api/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const estudiante = estudiantes.find(e => e.id === id);
    if (!estudiante) return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    res.status(200).json(estudiante);
});

app.post('/api/estudiantes', (req, res) => {
    const { nombre, correo, nota } = req.body;
    if (!nombre || !correo || nota === undefined) {
        return res.status(400).json({ mensaje: 'Faltan campos obligatorios: nombre, correo, nota' });
    }
    const nuevo = { id: nextId++, nombre, correo, nota };
    estudiantes.push(nuevo);
    res.status(201).json(nuevo);
});

app.put('/api/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = estudiantes.findIndex(e => e.id === id);
    if (index === -1) return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    const { nombre, correo, nota } = req.body;
    estudiantes[index] = {
        ...estudiantes[index],
        nombre: nombre ?? estudiantes[index].nombre,
        correo: correo ?? estudiantes[index].correo,
        nota: nota ?? estudiantes[index].nota,
    };
    res.status(200).json(estudiantes[index]);
});

app.delete('/api/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = estudiantes.findIndex(e => e.id === id);
    if (index === -1) return res.status(404).json({ mensaje: 'Estudiante no encontrado' });
    const eliminado = estudiantes.splice(index, 1)[0];
    res.status(200).json({ mensaje: 'Estudiante eliminado correctamente', estudiante: eliminado });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});