export class UpdateProductTransactionCommand {
  constructor(
    public id: number,
    public qty: number = 0,
    public price: number = 0,
  ) {
  }
}
