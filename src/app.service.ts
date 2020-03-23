import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AddProductCommand } from './commands/add-product.command';
import { AddProduct } from './interfaces/add-product.interface';
import { DeleteProductTransactionCommand } from './commands/delete-product-transaction.command';
import { UpdateProduct } from './interfaces/update-product.interface';
import { UpdateProductTransactionCommand } from './commands/update-product-transaction.command';

@Injectable()
export class AppService {
  constructor(
    private readonly commandBus: CommandBus
  ) {
  }

  addProduct(product: AddProduct) {
    return this.commandBus.execute(
      new AddProductCommand(
        product.productCode,
        product.registerDate,
        product.qty,
        product.price,
      ),
    );
  }

  updateProduct(product: UpdateProduct) {
    return this.commandBus.execute(
      new UpdateProductTransactionCommand(product.id, product.qty, product.price),
    );
  }

  deleteProduct(id: number) {
    return this.commandBus.execute(
      new DeleteProductTransactionCommand(id),
    );
  }
}
