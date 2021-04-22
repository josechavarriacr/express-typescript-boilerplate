import { DataBase } from '../../Shared/Domain/datasource-base.interface';

export default interface TodoEntity extends DataBase {
    name: string
    status: boolean
}