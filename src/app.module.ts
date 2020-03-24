import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { RabbitMQModule } from '@nestjs-plus/rabbitmq';
import { AddProductHandler } from './handlers/add-product.handler';
import { UpdateProductTransactionHandler } from './handlers/update-product-transaction.handler';

export const CommandHandlers = [AddProductHandler, UpdateProductTransactionHandler];

@Module({
  imports: [
    CqrsModule,
    RabbitMQModule.forRoot({
      uri: 'amqp://user:kv8aq5f3tK9V@34.70.32.54:5672',
      exchanges: [
        {
          name: 'kardex',
          type: 'direct',
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ...CommandHandlers],
})
export class AppModule {
}
