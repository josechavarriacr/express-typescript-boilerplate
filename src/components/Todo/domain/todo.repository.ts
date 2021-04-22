import { Nullable } from '../../Shared/Domain/Nullable';
import TodoEntity from './todo.entity'
import TodoId from './todo.id';

export interface TodoRepository  {
    findAll(): Promise<TodoEntity[]>
    findOne(id: TodoId): Promise<Nullable<TodoEntity>>
    createOne(body: TodoEntity): Promise<TodoEntity>
}
