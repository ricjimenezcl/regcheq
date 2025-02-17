import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CatalogsModule } from './catalogs/catalogs.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';


@Module({
  imports: [
    ConfigModule.forRoot(), // Cargar variables de entorno
    MongooseModule.forRoot(process.env.MONGO_URI || ''), AuthModule, UsersModule, CatalogsModule, // Conectar MongoDB
    AuthModule,
    UsersModule,
    CatalogsModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 60,
        limit: 10,
      }
    ]),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',  // Dirección de Redis
      port: 6379,         // Puerto de Redis
      ttl: 300,           // Tiempo de vida en caché (5 minutos)
    }),

  ],
})
export class AppModule {}
