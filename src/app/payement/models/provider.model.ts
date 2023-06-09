export class Provider {
    code: number;
    image: string;
    name: string;
    products?: string[] = [];
    category: string;
    surname: string;
    rechargeTypes?: RechargeType[] = [
      new RechargeType(0, 'NORMAL RECHARGE'),
      new RechargeType(1, 'PASS JAWAL SMS *1'),
      new RechargeType(2, 'Call Mobile *2'),
      new RechargeType(3, 'PASS JAWAL INTERNET *3'),
      new RechargeType(5, 'PASS JAWAL *5'),
      new RechargeType(6, 'PASS MT TALK *6'),
      new RechargeType(9, 'PASS SERVICES PREMIUMS *9'),

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
  
