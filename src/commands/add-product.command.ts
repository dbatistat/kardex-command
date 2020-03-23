export class AddProductCommand {
  constructor(
    public productCode: string = '',
    public registerDate: Date = new Date(),
    public qty: number = 0,
    public price: number = 0,
  ) {
  }
}
