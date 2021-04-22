import TodoEntity from './todo.entity'

export interface TodoRepository  {
    findAll(): Promise<TodoEntity[]>
    createOne(body: TodoEntity): Promise<TodoEntity>
}
