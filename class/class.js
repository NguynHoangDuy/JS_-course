class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  setNam(newName) {
    this.name = newName;
  }
}

const duy = new Person("Hoàng Duy");
duy.setNam("Em Duy");
console.log(duy.getName());

class Item {
  constructor(name) {
    this.name = name;
    this.constructor.count++;
  }

  static count = 0;
}
const conMeo = new Item("Con mèo");
const conHeo = new Item("Con Heo");
const conCho = new Item("Con Chó");
console.log(Item.count);

//super extend

class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walking() {
    console.log(`Đi bằng ${this.legs} chân`);
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("Tui bây bằng cánh");
  }
}
let conChim = new Bird("6");
conChim.walking();
console.log(conChim);
conChim.fly();
