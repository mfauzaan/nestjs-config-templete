import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from './modules/mongoose/mongoose.module';
import configuration from './modules/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      ignoreEnvFile: true,
      load: [configuration],
    }),
    MongooseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
