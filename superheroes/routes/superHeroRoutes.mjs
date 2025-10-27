import express from 'express';
import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController,
    obtenerSuperheroesMayoresDe30Controller, buscarSuperheroesPorAtributoController, 
    crearSuperheroeController, actualizarSuperheroeController, eliminarSuperheroeController,
    eliminarSuperheroePorNombreController } from '../controllers/superheroesController.mjs';

import { validarCrearSuperHeroe, validarActualizarSuperHeroe, validarId, validarNombre } from '../validation/validationRules.js';
import { handleValidationErrors } from '../validation/errorMiddleware.js';

const router = express.Router();

router.get('/heroes',obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/mayor/mayores30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

router.post('/crearHeroes', validarCrearSuperHeroe(), handleValidationErrors , crearSuperheroeController);

router.put('/actualizarHeroes/:id', validarActualizarSuperHeroe(), handleValidationErrors, actualizarSuperheroeController);

router.delete('/eliminarHeroes/:id', validarId(), handleValidationErrors, eliminarSuperheroeController);
router.delete("/eliminarHeroesPorNombre/:nombreSuperHeroe", validarNombre(), handleValidationErrors, eliminarSuperheroePorNombreController);

export default router;