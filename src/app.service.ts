import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    Logger.log('AppService says hello', AppService.name);
    return 'Hello World!';
  }
}
