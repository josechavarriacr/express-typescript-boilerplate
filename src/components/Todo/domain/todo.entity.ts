import { ModelBase } from '../../Shared/Domain/model-base.interface';

export default interface TodoEntity extends ModelBase {
    todoName: string
    todoStatus: number
}