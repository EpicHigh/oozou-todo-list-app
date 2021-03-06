import { createConnection } from 'typeorm'
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions'
import { SubtaskEntity, TodoEntity } from '../entities'

const options: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'my_todo_list',
  entities: [TodoEntity, SubtaskEntity],
  logging: true,
  synchronize: true,
}

export default createConnection(options)
