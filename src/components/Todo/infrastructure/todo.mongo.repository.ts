import { Nullable } from "../../Shared/Domain/value-object/Nullable";
import TodoEntity from "../domain/todo.entity";
import TodoId from "../domain/todo.id";
import { TodoRepository } from "../domain/todo.repository";
import Todos, { ITodo } from "./todo.datasource";

export class TodoMongoRepository implements TodoRepository {

    public async createOne(body: TodoEntity) {
        const result: ITodo = await Todos.create(body)
        return result
    }

    public async findOne(id: TodoId): Promise<Nullable<TodoEntity>> {
        const result: Nullable<TodoEntity> = await Todos.findById(id)
        return result
    }

    public async findAll() {
        // Infra conditions
        const result: ITodo[] = await Todos.find() 
        return result
    }
}
