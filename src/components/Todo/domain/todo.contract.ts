import TodoEntity from './todo.entity'

export interface TodoRepository {
    create(todo: TodoEntity): Promise<void>
    findById(): Promise<TodoEntity>
    findAll(): Promise<Array<TodoEntity>>
}