import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathModule } from './controllers/math/math.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [MathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
