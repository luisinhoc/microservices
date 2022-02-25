import { CreateMathDto } from './dto/create-math.dto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class MathService {
  create(createMathDto: CreateMathDto) {
    return 'This action adds a new math';
  }

  findAll() {
    return `This action returns all math`;
  }

  findOne(id: number) {
    return `This action returns a #${id} math`;
  }

  remove(id: number) {
    return `This action removes a #${id} math`;
  }
}
