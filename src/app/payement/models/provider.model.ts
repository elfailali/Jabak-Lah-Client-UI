export class Provider {
    code: number;
    image: string;
    name: string;
    products?: string[] = [];
    category: string;
    surname: string;
    rechargeTypes?: RechargeType[] = [
      new RechargeType(1, 'SMS *1'),
      new RechargeType(2, 'Call Mobile *2'),
      new RechargeType(3, 'Data Card *3'),
    ];
    creancierCode?: number;
  
    constructor(code: number, name: string, image: string, category: string, surname: string) {
      this.code = code;
      this.image = image;
      this.name = name;
      this.category = category;
      this.surname = surname;
    }
  
    addProduct(product: string) {
      this.products?.push(product);
    }
  
    addRechargeType(rechargeType: RechargeType) {
      this.rechargeTypes?.push(rechargeType);
    }
    setCreancierCode(code: number) {
      this.creancierCode = code;
    }
  }
  export class RechargeType {
  
    code?: number;
    name?: string;
  
    constructor(code: number, name: string) {
      this.code = code;
      this.name = name;
    }
  }
  
