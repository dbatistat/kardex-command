import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { DeleteProductTransactionCommand } from '../commands/delete-product-transaction.command';
import { AmqpConnection } from '@nestjs-plus/rabbitmq';

@CommandHandler(DeleteProductTransactionCommand)
export class DeleteProductTransactionHandler implements IQueryHandler<DeleteProductTransactionCommand> {
  constructor(
    private readonly amqpConnection: AmqpConnection,
  ) {
  }

  public async execute(command: DeleteProductTransactionCommand): Promise<void> {
    this.amqpConnection.publish('kardex', 'delete-product', command);
  }
}
