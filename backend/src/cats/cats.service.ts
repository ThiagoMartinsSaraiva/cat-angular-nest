import { Injectable } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Cat } from 'src/interfaces/cats.interface';
import { Model } from 'mongoose';
import { CatDto } from 'src/dtos/cats.dto';
import { Types } from 'mongoose'

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async getAll(): Promise<Cat[]> {
    return this.catModel.find().exec()
  }

  async getOne(_id: Types.ObjectId): Promise<Cat> {
    return this.catModel.findById(_id).exec()
  }

  async create(catDto: CatDto): Promise<Cat> {
    const createdCat = this.catModel(catDto)
    return createdCat.save()
  }

  async delete(_id: Types.ObjectId): Promise<string> {
    const deletedCat = this.catModel.findById(_id)
    deletedCat.deleteOne({_id})
    return 'Removido com sucesso';
  }
}
