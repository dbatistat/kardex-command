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
    this.amqpConnection.publish('kardex', 'update-product', command);
  }
}
