import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsSchema } from 'src/schemas/cats.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatsSchema }])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
