import express from 'express';
import {
    getStudent,
    getStudentId,
    createStudent,
    updateStudent,
    deleteStudent
} from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getStudent);
router.get('/:id', getStudentId);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;