import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('Backend')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
