import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SampleController } from './sample/sample.controller';
import { Sample2Controller } from './sample2/sample2.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'sampleName',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'sampleClientId',
            brokers: ['broker:29092'],
          },
          consumer: {
            groupId: 'sampleGroupId',
          },
        },
      },
    ]),
  ],
  controllers: [SampleController, Sample2Controller],
  providers: [],
})
export class AppModule {}
