import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/interfaces/cats.interface';
import { CatDto } from 'src/dtos/cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Get('')
  findAll(): Promise<Cat[]> {
    return this.catsService.getAll()
  }

  @Get('/:id')
  findOne(@Param('id') _id: string): Promise<Cat> {
    return this.catsService.getOne({_id})
  }

  @Post('')
  create(@Body() catDto: CatDto): Promise<Cat> {
    return this.catsService.create(catDto)
  }

  @Delete('/:id')
  delete(@Param('id') _id: string): Promise<string> {
    return this.catsService.delete(_id)
  }
}
