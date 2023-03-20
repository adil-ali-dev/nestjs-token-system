import 'dotenv/config';
import { join } from 'path';
import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  host: process.env.HOST,
  type: process.env.TYPE as any,
  port: parseInt(process.env.DB_PORT),
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity.js'],
  migrations: [join(__dirname, 'src/migrations/*.ts')],
  subscribers: [],
};
