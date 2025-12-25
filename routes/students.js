import express from 'express';
import {
    getStudent,
    getStudentId,
    createStudent,
    updateStudent,
    deleteStudent
} from '../controllers/studentController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getStudent);
router.get('/:id', getStudentId);
router.post('/', authenticateToken, createStudent);
router.put('/:id', authenticateToken, updateStudent);
router.delete('/:id', authenticateToken, deleteStudent);

export default router;