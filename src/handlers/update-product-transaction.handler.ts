import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { UpdateProductTransactionCommand } from '../commands/update-product-transaction.command';
import { AmqpConnection } from '@nestjs-plus/rabbitmq';

@CommandHandler(UpdateProductTransactionCommand)
export class UpdateProductTransactionHandler implements IQueryHandler<UpdateProductTransactionCommand> {
  constructor(
    private readonly amqpConnection: AmqpConnection,
  ) {
  }

  public async execute(command: UpdateProductTransactionCommand): Promise<void> {
    console.log('SEND UPDATE-PRODUCT', command);
    this.amqpConnection.publish('kardex', 'products', {route: 'update-product', data: command});
  }
}
