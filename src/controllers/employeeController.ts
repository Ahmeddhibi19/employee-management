// src/controllers/employeeController.ts
import { Request, Response } from 'express';
import Employee, { IEmployee } from '../models/employee';
import { employeeValidationSchema } from '../utils/validate';

export const addEmployee = async (req: Request, res: Response) => {
    const { error } = employeeValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { name, email, position, department, salary } = req.body;

    try {
        const newEmployee = new Employee({ name, email, position, department, salary });
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const updateEmployee = async (req: Request, res: Response) => {
    const { error } = employeeValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(updatedEmployee);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const deleteEmployee = async (req: Request, res: Response) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee deleted' });
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

// Create a new employee
export const createEmployee = async (req: Request, res: Response) => {
    try {
        const { name, position, department } = req.body;
        const newEmployee = new Employee({
            name,
            position,
            department
        });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

// Get all employees
export const getEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

// Get a single employee by ID
export const getEmployeeById = async (req: Request, res: Response) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};