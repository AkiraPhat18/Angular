export class Product {
  productCode: String;
  productName: String;
  starRating: number = 0;

  constructor(productCode: String,productName: String){
    this.productCode = productCode,
    this.productName = productName
  }
}
