// src/models/employee.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
    name: string;
    email: string;
    position: string;
    department?: string;
    salary: number;
}

const EmployeeSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    department: { type: String },
    salary: { type: Number, required: true },
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);
