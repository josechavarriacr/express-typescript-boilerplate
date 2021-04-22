import TodoEntity from "./todo.entity"

class TodoService {
    private persistence: any
    constructor(Persistence: any) {
        this.persistence = Persistence
    }

    async findAll() {
        // business conditions
        const result: TodoEntity[] = await this.persistence.findAll()
        return result
    }

    async createOne(body: TodoEntity) {
        // business conditions
        const result: void = await this.persistence.createOne(body)
        return result
    }

    // async updateOne(id: string, body: TodoEntity)  {
    //     // business conditions
    //     const result: void = await this.persistence.updateOne(id, body)
    //     return result
    // }

    // async findOne(id: string) {
    //      // business conditions
    //     const result: TodoEntity = await this.persistence.findOne(id)
    //     return result
    // }
}

export default TodoService