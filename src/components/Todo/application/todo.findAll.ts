import { TodoRepository } from "../infrastructure/todo.mongo.repository";

export class TodoFindAll {
    constructor(private respository: TodoRepository) {}
    
    async run() {
        const findAll = await this.respository.findAll()
    }
}