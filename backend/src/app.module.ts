import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb://root12:root12@ds018308.mlab.com:18308/nest-cats', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
