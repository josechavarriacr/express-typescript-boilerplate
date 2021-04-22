import TodoEntity from './todo.entity'

export interface TodoRepository  {
    findAll(): Promise<TodoEntity[]>
}
