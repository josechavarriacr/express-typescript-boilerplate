import { ModelBase } from '../../Shared/Domain/model-base.interface';

export interface TodoEntity extends ModelBase {
    todoName: string
    todoStatus: number
}