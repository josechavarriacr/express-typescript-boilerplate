import { TodoEntity } from './todo.entity'
export interface TodoRepository {
    create(todo: TodoEntity): Promise<void>
    searchBy
}