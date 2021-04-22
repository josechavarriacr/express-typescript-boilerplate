import uniqueValidator from 'mongoose-unique-validator'
import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
    id: string,
    name: string; 
    status: boolean; 
    createdAt: string;
    updatedAt: string;
}

const TodoSchema = new Schema({
        name: { type: String, required: true, unique: true },
        status: { type: String, required: true },
    }, { timestamps: true })
    // TodoSchema.plugin(uniqueValidator)

export default mongoose.model<ITodo>('Todos', TodoSchema)



