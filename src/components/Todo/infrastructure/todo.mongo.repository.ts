import TodoEntity from "../domain/todo.entity";
import { TodoRepository } from "../domain/todo.repository";
import Todos, { ITodo } from "./todo.datasource";

export class TodoMongoRepository implements TodoRepository {
    public async findAll() {
        // Infra conditions
        const result: ITodo[] = await Todos.find() 
        return result
    }
}
