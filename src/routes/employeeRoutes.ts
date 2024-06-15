// src/routes/employeeRoutes.ts
import { Router } from 'express';
import { addEmployee, updateEmployee, deleteEmployee,getEmployeeById } from '../controllers/employeeController';

const router = Router();

router.post('/employees/add', addEmployee);
router.put('/employees/update/:id', updateEmployee);
router.delete('/employees/delete/:id', deleteEmployee);
router.get('/employees/getone/:id',getEmployeeById)

export default router;
