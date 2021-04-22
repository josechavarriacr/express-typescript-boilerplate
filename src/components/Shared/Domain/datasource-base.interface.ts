import { ObjectId } from 'mongoose'

export interface DataBase {
    id: ObjectId;
    createdAt: string;
    updatedAt: string;
  }