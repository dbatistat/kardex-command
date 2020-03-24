import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { AddProductCommand } from '../commands/add-product.command';
import { AmqpConnection } from '@nestjs-plus/rabbitmq';

@CommandHandler(AddProductCommand)
export class AddProductHandler implements IQueryHandler<AddProductCommand> {
  constructor(
    private readonly amqpConnection: AmqpConnection,
  ) {
  }

  public async execute(command: AddProductCommand): Promise<void> {
    console.log('SEND ADD-PRODUCT', command);
    this.amqpConnection.publish('kardex', 'products', {route: 'add-product', data: command});
  }
}
