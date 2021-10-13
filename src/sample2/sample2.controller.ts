import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('sample2')
export class Sample2Controller {
  @EventPattern('sample2')
  readMessage(data: Record<string, unknown>) {
    console.log(
      '### TOPIC SAMPLE2',
      '### KEY',
      data.key,
      '### VALUE',
      data.value,
    );
  }
}
