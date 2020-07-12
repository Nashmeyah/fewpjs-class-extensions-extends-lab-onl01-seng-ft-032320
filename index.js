class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    return this.array.reduce((side, total) => {
      return total + side;
    });
  }
}

class Triangle extends Polygon {
  get isValid() {
    let a = !!(this.array[0] + this.array[1] > this.array[2]);
    let b = !!(this.array[1] + this.array[2] > this.array[0]);
    let c = !!(this.array[2] + this.array[0] > this.array[1]);
    return a && b && c;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.array[0] === this.array[1] && this.array[1] === this.array[2]) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.array[0] ** 2;
  }
}
