import TodoEntity from '../domain/todo.entity'

export interface TodoRepository  {
    findAll(): Promise<TodoEntity>
}
