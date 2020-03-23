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
    this.amqpConnection.publish('kardex', 'add-product', command);
  }
}
