import { MessagePattern, Payload } from '@nestjs/microservices';

import { Controller } from '@nestjs/common';
import { CreateMathDto } from './dto/create-math.dto';
import { MathService } from './math.service';

@Controller()
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @MessagePattern({ cmd: 'sum' })
  accumulate(@Payload() data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
