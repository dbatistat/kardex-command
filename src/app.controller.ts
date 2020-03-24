import { Body, Controller, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { AddProduct } from './interfaces/add-product.interface';
import { UpdateProduct } from './interfaces/update-product.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post()
  addProduct(@Body() product: AddProduct) {
    return this.appService.addProduct(product);
  }

  @Put()
  updateProduct(@Body() product: UpdateProduct) {
    return this.appService.updateProduct(product);
  }
}
