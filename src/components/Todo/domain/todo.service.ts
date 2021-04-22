import TodoEntity from "./todo.entity"

class TodoService {
    private datasource: any
    constructor(DataSource: any) {
        this.datasource = DataSource
    }

    async create(body: TodoEntity) {
        // business conditions
        const result: Promise<void>  = this.datasource.create(body)
        return result
    }

    async update(id: string, body: TodoEntity) {
        // business conditions
        const result: Promise<void>  = this.datasource.update(id, body)
        return result
    }

    async findAll() {
        // business conditions
        const result: Promise<TodoEntity>  = this.datasource.findAll()
        return result
    }

    async findOne(id: string) {
         // business conditions
        const result: Promise<TodoEntity>  = this.datasource.findOne(id)
        return result
    }
}

export default TodoService