import {
  Controller,
  Inject,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import {
  ClientKafka,
  MessagePattern,
  Payload,
  Ctx,
  KafkaContext,
} from '@nestjs/microservices';

@Controller('sample')
export class SampleController implements OnModuleInit, OnModuleDestroy {
  constructor(@Inject('sampleName') private readonly client: ClientKafka) {}

  async onModuleInit() {
    ['sample'].forEach((key) => this.client.subscribeToResponseOf(`${key}`));
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  @MessagePattern('sample')
  readMessageFromSample(@Payload() message: any, @Ctx() context: KafkaContext) {
    const data = context.getMessage();

    console.log(
      '### TOPIC SAMPLE',
      '### KEY',
      data.key,
      '### VALUE',
      data.value,
    );
  }
}
