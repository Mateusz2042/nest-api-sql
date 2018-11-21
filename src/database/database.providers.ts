import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '3vc8udqr',
      database: 'activity_database',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      migrations: ['migration/*.js'],
      cli: {
        migrationsDir: 'migration',
      },
    }),
  },
];
